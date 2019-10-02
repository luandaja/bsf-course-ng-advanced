import { BoardCardsFirestoreService } from '../../core/services/board-cards.firestore.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, from, of, combineLatest, forkJoin, pipe } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap, switchMap, take, tap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import * as actions from './game.actions';
import { Player } from '../../models';
import { Store } from '@ngrx/store';
import { GameState } from './game.state';
import { getPlayers } from './game.selectors';
import { PlayerService } from '../../core/services/player.service';
import { add } from '../../models/Utils';
import { BoardCard } from '../../models/BoardCard';
import { StateFirebaseService } from '../../core/services/state.firebase.service';
import { StoryFirebaseService } from '../../core/services/story.firebase.service';
import { AvaiableCardsService } from '../../core/services/avaiable-cards.firebase.service';


@Injectable()
export class GameEffects {

	constructor(private actions$: Actions,
		private playerService: PlayerService,
		private stateService: StateFirebaseService,
		private storyService: StoryFirebaseService,
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
			exhaustMap(() =>
				this.stateService.update("game-room", { hasGameStarted: true })
					.pipe(map(() => actions.gameStarted()))
			)));

	setNextTurn$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.setNextTurn),
			exhaustMap(() =>
				this.playerService.getNextTurn()
					.pipe(
						map((nextTurn) => actions.updateCurrentTurn({ currentTurn: nextTurn })))
			)));

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

	setBoardCard$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.setBoardCard),
			exhaustMap(action =>
				this.boardCardsService.create(action.boardCard)
					.pipe(
						switchMap(() => this.playerService.playerThrowCard()),
						//switchMap((userPlayer) => [actions.boardCardSetted({ boardCard: action.boardCard }), actions.updateUserPlayer({ userPlayer })]
						switchMap(() => [actions.boardCardSetted({ boardCard: action.boardCard })]
						)
					)
			)
		)
	);

	setVote$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.setVote),
			exhaustMap(action =>
				this.boardCardsService.update(action.boardCard.id.toString(), action.boardCard)
					.pipe(
						switchMap(() => this.playerService.playerVote()),
						//switchMap((userPlayer) => [actions.boardCardSetted({ boardCard: action.boardCard }), actions.updateUserPlayer({ userPlayer })]
						switchMap(() => [actions.boardCardSetted({ boardCard: action.boardCard })]
						)
					)
			)
		)
	);

	setCurrentStory$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.setCurrentStory),
			exhaustMap(action =>
				this.storyService.create(action.currentStory)
					.pipe(
						switchMap(() => {
							const boardCard: BoardCard = { id: action.currentStory.cardIndex, cardIndex: action.currentStory.cardIndex, owner: action.currentStory.storyTeller, votes: [] };
							return this.boardCardsService.create(boardCard).pipe(map(() => boardCard));
						}),
						//	switchMap((boardCard) => [actions.currentStorySetted({ currentStory: action.currentStory }), actions.boardCardSetted({ boardCard })]
						switchMap(() => [actions.currentStorySetted({ currentStory: action.currentStory })]
						)
					)
			)
		)
	);

	showVotes$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.showVotes),
			exhaustMap(() =>
				this.stateService.update("game-room", { areVotesVisible: true })
					.pipe(
						switchMap(() => this.playerService.updateScore()),
						//switchMap((userPlayer) => [actions.votesShown, actions.updateUserPlayer({ userPlayer })]
						switchMap(() => [actions.votesShown()]
						)
					)
			)
		)
	);

	nextRound$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.nextRound),
			pipe(action =>
				forkJoin(
					this.storyService.delete("game-room"),
					this.boardCardsService.deleteCollection(),
					this.playerService.getNextTurn()
				).pipe(
					switchMap((result) => [actions.nextRoundSetted({ nextTurn: result[2] }),])
				)
			)
		)
	);

	setUserHand$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.setUserHand),
			exhaustMap(action =>
				this.playerService.getUserHand(action.cardsCount)
					.pipe(
						switchMap((cards) => this.cardsService.deleteQueryBatch(cards.map(card => card.toString())).pipe(map(() => cards))),
						exhaustMap((cards) => [actions.userHandSetted({ cards }), actions.setNextTurn()]
						)
					)
			)
		)
	);


}
