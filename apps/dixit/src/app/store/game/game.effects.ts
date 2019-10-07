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
import { SnackbarService } from '@glotrix/ui/snackbar';


@Injectable()
export class GameEffects {

	constructor(private actions$: Actions,
		private playerService: PlayerService,
		private stateService: StatusBoardFirebaseService,
		private cardsService: AvaiableCardsService,
		private boardCardsService: BoardCardsFirestoreService,
		private snackbarService: SnackbarService) { }

	signIn$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.signIn),
			switchMap(async action => {
				const user = await this.playerService.add(action.username, action.photoUrl).toPromise();
				return actions.signInSuccess({ userPlayer: { ...user } })
			}
			)));
	signOut$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.signOut),
			switchMap(async action => {
				this.playerService.logout();
				return actions.nothing();
			}
			)));

	recoverPlayerState$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.recoverPlayerState),
			switchMap(async action => {
				const { userPlayer, isRoundFirst, currentHand, isLogged, isGuessingTime } = this.playerService.recoverPlayerState();
				return actions.playerStateRecovered({ player: userPlayer, isRoundFirst, currentHand, isLogged, isGuessingTime });
			}
			)));

	saveUser$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.saveUser),
			switchMap(async action => {
				await this.playerService.savePlayerState().toPromise();
				return actions.nothing();
			}
			)));

	startGame$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.startGame),
			switchMap(async action => {
				await this.stateService.update(StatusBoard.GameState, { hasGameStarted: true });
				await this.cardsService.insertBatch(this.generateCardIndexes());
				const firstPlayer = await this.playerService.getFirstPlayer().toPromise();

				this.snackbarService.showSuccess("Let's start playing!", 'Dixit');
				this.snackbarService.showInfo(`${firstPlayer.username} is the story teller`, 'Dixit');
				return actions.gameStarted({ playerInTurn: firstPlayer.id });
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

	setCurrentStory$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.setCurrentStory),
			switchMap(async action => {
				await this.stateService.update(StatusBoard.CurrentStory, { currentStory: action.currentStory });
				const boardCard: BoardCard = { id: action.currentStory.cardIndex, cardIndex: action.currentStory.cardIndex, owner: action.currentStory.storyTeller, votes: [] };
				await this.boardCardsService.create(boardCard).toPromise();
				await this.playerService.playerThrowCard().toPromise();
				this.snackbarService.showSuccess("Story setted!", 'Dixit');
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
				this.snackbarService.showSuccess("Your card was thrown to the board!", 'Dixit');
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
				this.snackbarService.showSuccess("Your vote was saved!", 'Dixit');
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
				await this.cardsService.deleteQueryBatch(result.cards.map(card => card.toString())).toPromise();
				await this.stateService.update(StatusBoard.CurrentPlayerTurn, { currentPlayerTurn: result.nextPlayerTurn });
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
				return actions.nothing();
			}
			)
		)
	);

	updatePlayerScore$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.updatePlayerScore),
			switchMap(action => this.playerService.updateScore().pipe(take(1),
				map(userPlayer => actions.playerScoreUpdated({ userPlayer }))))
		)
	);


	nextRound$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.nextRound),
			switchMap(async action => {
				await this.playerService.setNextStoryTeller().toPromise();
				const firstPlayer = await this.playerService.getFirstPlayer().toPromise();
				await this.stateService.update(StatusBoard.CurrentPlayerTurn, { currentPlayerTurn: firstPlayer.id });

				await this.stateService.update(StatusBoard.CurrentStory, { currentStory: null });
				await this.stateService.update(StatusBoard.shouldRefreshPlayer, { shouldRefreshPlayer: true });
				await this.stateService.update(StatusBoard.shouldDragCards, { shouldDragCards: true });

				//const firstPlayer = await this.playerService.getFirstPlayer().toPromise();
				//update next storyteller
				//updating the turn starting from order 1 to last one, so all can pick a card
				//update al user en reducer
				//update shouldDragCard a true yala

				//shouldRefreshPlayer true

				await this.boardCardsService.deleteCollection().toPromise();
				this.snackbarService.showSuccess("Go to your hand to get your next card!", 'Dixit');
				return actions.nextRoundSetted({ nextPlayerTurn: firstPlayerId });
			}
			)
		)
	);

	private generateCardIndexes(): number[] {
		const cardIndexes: number[] = [];
		for (let index = 0; index < 100; index++) {
			cardIndexes.push(index);
		}
		return shuffle(cardIndexes);
	}
}
