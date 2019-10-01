import { BoardCardsFirestoreService } from '../../core/services/board-cards.firestore.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, from, of } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap, switchMap, take } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import * as actions from './game.actions';
import { Player } from '../../models';
import { Store } from '@ngrx/store';
import { GameState } from './game.state';
import { getPlayers } from './game.selectors';
import { PlayerService } from '../../core/services/player.service';


@Injectable()
export class GameEffects {

	constructor(private actions$: Actions,
		private playerService: PlayerService,
		private boardCardsService: BoardCardsFirestoreService) { }

	signIn$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.signIn),
			exhaustMap(action =>
				this.playerService.add(action.username, action.photoUrl)
					.pipe(
						map((user) => actions.signInSuccess({ userPlayer: { ...user } })),
						catchError(() => EMPTY))
			)));

	fetchBoardCards$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.fetchBoardCards),
			exhaustMap(() =>
				this.boardCardsService.collection$()
					.pipe(
						map((boardCards) => actions.boardCardsLoaded({ boardCards })),
						catchError(() => EMPTY))
			)));
}
