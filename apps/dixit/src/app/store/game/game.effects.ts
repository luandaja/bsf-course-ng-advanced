import { BoardCardsFirestoreService } from '../../core/services/board-cards.firestore.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, from, of, combineLatest, forkJoin, pipe } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap, switchMap, take, tap, mergeAll } from 'rxjs/operators';
import * as actions from './game.actions';
import { PlayerService } from '../../core/services/player.service';
import { BoardCard } from '../../models/BoardCard';
import { StatusBoardFirebaseService, StatusBoard } from '../../core/services/state.firebase.service';
import { AvaiableCardsService } from '../../core/services/avaiable-cards.firebase.service';
import { shuffle, add } from '../../models/Utils';


@Injectable()
export class GameEffects {

	constructor(private actions$: Actions,
		private playerService: PlayerService,
		private stateService: StatusBoardFirebaseService,
		private cardsService: AvaiableCardsService,
		private boardCardsService: BoardCardsFirestoreService) { }

	signIn$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.signIn),
			switchMap(async action => {
				const user = await this.playerService.add(action.username, action.photoUrl).toPromise();
				return actions.signInSuccess({ userPlayer: { ...user } })
			}
			)));

	startGame$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.startGame),
			switchMap(async action => {
				await this.stateService.update(StatusBoard.GameState, { hasGameStarted: true });
				await this.cardsService.insertBatch(this.generateCardIndexes());
				return actions.gameStarted();
			}
			)
		)
	);

	fetchPlayers$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.fetchPlayers),
			exhaustMap(() =>
				this.playerService.collection$()
					.pipe(
						take(1),
						map((players) => actions.playersLoaded({ players }))
					)
			)
		)
	);

	fetchAvaiableCards$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.fetchAvaiableCards),
			exhaustMap(() =>
				this.cardsService.collection$()
					.pipe(
						take(1),
						map((cards) => actions.avaiableCardsLoaded({ cards })),
						catchError(() => EMPTY)
					)
			)
		)
	);

	setCurrentStory$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.setCurrentStory),
			switchMap(async action => {
				await this.stateService.update(StatusBoard.CurrentStory, { currentStory: action.currentStory });
				const boardCard: BoardCard = { id: action.currentStory.cardIndex, cardIndex: action.currentStory.cardIndex, owner: action.currentStory.storyTeller, votes: [] };
				await this.boardCardsService.create(boardCard).toPromise();
				return actions.currentStorySetted({ currentStory: action.currentStory });
			}
			)
		)
	);

	setBoardCard$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.setBoardCard),
			switchMap(async action => {
				await this.boardCardsService.create(action.boardCard).toPromise();
				await this.playerService.playerThrowCard().toPromise();
				return actions.boardCardSetted({ boardCard: action.boardCard });
			}
			)
		)
	);

	setVote$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.setVote),
			switchMap(async action => {
				await this.playerService.playerVote().toPromise();
				const boardCard: BoardCard = { ...action.boardCard, votes: add(action.boardCard.votes, action.userPlayer) };
				await this.boardCardsService.update(action.boardCard.cardIndex.toString(), boardCard);
				return actions.voteSetted({ boardCard: boardCard });
			}
			)
		)
	);

	setUserHand$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.setUserHand),
			switchMap(async action => {
				const result = await this.playerService.getUserHand(action.cardsCount).toPromise();
				await this.stateService.update(StatusBoard.CurrentPlayerTurn, { currentTurn: result.currentTurn + 1 });
				await this.cardsService.deleteQueryBatch(result.cards.map(card => card.toString()));
				return actions.userHandSetted({ cards: result.cards });
			}
			)
		)
	);

	showVotes$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.showVotes),
			switchMap(async action => {
				await this.stateService.update(StatusBoard.VotesVisibility, { areVotesVisible: true });
				return actions.nothing(); //actions.setVotesVisibility({ areVotesVisible: true });
			}
			)
		)
	);

	updatePlayerScore$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.updatePlayerScore),
			switchMap(action => this.playerService.updateScore().pipe(take(1), map(userPlayer => actions.playerScoreUpdated({ userPlayer }))))
		)
	);


	nextRound$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.nextRound),
			switchMap(async action => {
				await this.stateService.update(StatusBoard.CurrentStory, { currentStory: null });
				await this.stateService.update(StatusBoard.CurrentPlayerTurn, { currentTurn: action.nextTurn });
				await this.boardCardsService.deleteCollection().toPromise();
				return actions.nextRoundSetted();
			}
			)
		)
	);

	private generateCardIndexes(): number[] {
		const cardIndexes: number[] = [];
		for (let index = 0; index < 100; index++) {
			cardIndexes.push(index);
		}
		shuffle(cardIndexes);
		return cardIndexes;
	}
}
