import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, from, of } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap, switchMap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import * as actions from './game.actions';
import { Player } from '../../models';


@Injectable()
export class GameEffects {

	constructor(
		private actions$: Actions,
		private firestore: AngularFirestore
	) { }

	signIn$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.signIn),
			exhaustMap(action =>
				from(this.firestore.collection('players').add({ username: action.username, photoUrl: action.photoUrl })).pipe(
					map(() => (actions.signInSuccess({ username: action.username, photoUrl: action.photoUrl })),
						catchError(() => EMPTY)
					))
			)));





}
