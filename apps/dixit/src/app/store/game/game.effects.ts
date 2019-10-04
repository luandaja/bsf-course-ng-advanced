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
import { shuffle } from '../../models/Utils';


@Injectable()
export class GameEffects {

	constructor(private actions$: Actions,
		private playerService: PlayerService,
		private stateService: StatusBoardFirebaseService,
		private cardsService: AvaiableCardsService,
		private boardCardsService: BoardCardsFirestoreService) {



	}

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

	// setNextTurn$ = createEffect(() =>
	// 	this.actions$.pipe(
	// 		ofType(actions.setNextTurn),
	// 		exhaustMap(() =>
	// 			this.playerService.getNextTurn()
	// 				.pipe(
	// 					map((nextTurn) => actions.updateCurrentTurn({ currentTurn: nextTurn })))
	// 		)));

	fetchBoardCards$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.fetchBoardCards),
			exhaustMap(() =>
				this.boardCardsService.collection$()
					.pipe(
						take(1),
						map((boardCards) => actions.boardCardsLoaded({ boardCards })),
						catchError(() => EMPTY)
					)
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

	// fetchAvaiableCards$ = createEffect(() =>
	// 	this.actions$.pipe(
	// 		ofType(actions.fetchAvaiableCards),
	// 		exhaustMap(() =>
	// 			this.cardsService.collection$()
	// 				.pipe(
	// 					take(1),
	// 					map((cards) => actions.avaiableCardsLoaded({ cards })),
	// 					catchError(() => EMPTY)
	// 				)
	// 		)
	// 	)
	// );

	// setBoardCard$ = createEffect(() =>
	// 	this.actions$.pipe(
	// 		ofType(actions.setBoardCard),
	// 		exhaustMap(action =>
	// 			this.boardCardsService.create(action.boardCard)
	// 				.pipe(
	// 					switchMap(() => this.playerService.playerThrowCard()),
	// 					//switchMap((userPlayer) => [actions.boardCardSetted({ boardCard: action.boardCard }), actions.updateUserPlayer({ userPlayer })]
	// 					switchMap(() => [actions.boardCardSetted({ boardCard: action.boardCard })]
	// 					)
	// 				)
	// 		)
	// 	)
	// );

	// setVote$ = createEffect(() =>
	// 	this.actions$.pipe(
	// 		ofType(actions.setVote),
	// 		exhaustMap(action =>
	// 			this.boardCardsService.update(action.boardCard.id.toString(), action.boardCard)
	// 				.pipe(
	// 					switchMap(() => this.playerService.playerVote()),
	// 					//switchMap((userPlayer) => [actions.boardCardSetted({ boardCard: action.boardCard }), actions.updateUserPlayer({ userPlayer })]
	// 					switchMap(() => [actions.boardCardSetted({ boardCard: action.boardCard })]
	// 					)
	// 				)
	// 		)
	// 	)
	// );

	// setCurrentStory$ = createEffect(() =>
	// 	this.actions$.pipe(
	// 		ofType(actions.setCurrentStory),
	// 		exhaustMap(action =>
	// 			this.stateService.update("game-room", { currentStory: action.currentStory })
	// 				.pipe(
	// 					switchMap(() => {
	// 						const boardCard: BoardCard = { id: action.currentStory.cardIndex, cardIndex: action.currentStory.cardIndex, owner: action.currentStory.storyTeller, votes: [] };
	// 						return this.boardCardsService.create(boardCard).pipe(map(() => boardCard));
	// 					}),
	// 					//	switchMap((boardCard) => [actions.currentStorySetted({ currentStory: action.currentStory }), actions.boardCardSetted({ boardCard })]
	// 					switchMap(() => [actions.currentStorySetted({ currentStory: action.currentStory })]
	// 					)
	// 				)
	// 		)
	// 	)
	// );

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

	setUserHand$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.setUserHand),
			switchMap(async action => {
				const result = await this.playerService.getUserHand(action.cardsCount).toPromise();
				console.log('result', result);
				await this.stateService.update(StatusBoard.CurrentPlayerTurn, { currentTurn: result.currentTurn + 1 });
				await this.cardsService.deleteQueryBatch(result.cards.map(card => card.toString()))
				console.log('firing nothing');
				//const f = result.cards.map(x => x.cardIndex);
				return actions.userHandSetted({ cards: result.cards });
			}
			)
		)
	);

	// setUserHand$ = createEffect(() =>
	// 	this.actions$.pipe(
	// 		ofType(actions.setUserHand),
	// 		switchMap(action => {
	// 			return this.playerService.getUserHand(action.cardsCount)
	// 				.pipe(
	// 					mergeMap((info) => this.cardsService.deleteQueryBatch(info.cards.map(card => card.toString())).pipe(map(() => info))),
	// 					switchMap(as=> this.stateService.update(StatusBoard.CurrentPlayerTurn, {currentTurn: as.currentTurn })),
	// 					exhaustMap((cards) => [actions.userHandSetted({ cards }), actions.setNextTurn()]
	// 					)
	// 				)
	// 		}
	// 		)
	// 	)
	// );


	// setUserHand$ = createEffect(() =>
	// 	this.actions$.pipe(
	// 		ofType(actions.setUserHand),
	// 		exhaustMap(action =>
	// 			this.playerService.getUserHand(action.cardsCount)
	// 				.pipe(
	// 					switchMap((cards) => this.cardsService.deleteQueryBatch(cards.map(card => card.toString())).pipe(map(() => cards))),
	// 					exhaustMap((cards) => [actions.userHandSetted({ cards }), actions.setNextTurn()]
	// 					)
	// 				)
	// 		)
	// 	)
	// );

	// setUserHand$ = createEffect(() =>
	// 	this.actions$.pipe(
	// 		ofType(actions.setUserHand),
	// 		switchMap(async action => {
	// 			const handInfo = await this.playerService.getUserHand(action.cardsCount).toPromise();
	// 			await this.cardsService.deleteQueryBatch(handInfo.cards.map(card => card.toString())).toPromise();
	// 			await this.stateService.update(StatusBoard.CurrentPlayerTurn, { currentTurn: handInfo.currentTurn });
	// 			return actions.userHandSetted({ cards: handInfo.cards });
	// 		}
	// 		)
	// 	)
	// );




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
