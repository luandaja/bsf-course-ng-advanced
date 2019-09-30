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
import { PlayerFirestoreService } from '../../core/services/player-firestore.service';


@Injectable()
export class GameEffects {

	constructor(
		private actions$: Actions,
		//	private firestore: AngularFirestore,
		private playerService: PlayerFirestoreService,
		private gameStore: Store<GameState>
	) { }

	signIn$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.signIn),
			exhaustMap(action =>
				this.playerService.add(action.username, action.photoUrl)
					.pipe(
						map((user) => actions.signInSuccess({ userPlayer: { ...user } })),
						catchError(() => EMPTY))
			)));

}
/**const user = new Player(action.username, action.photoUrl, playersCount + 1);
						// return this.playerService.add(action.username, action.photoUrl).pipe(
						// 	map(() => (actions.signInSuccess({ userPlayer: { ...user } })),
						// 		catchError(() => EMPTY)
						// 	)) */
