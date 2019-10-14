import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, take, delay } from 'rxjs/operators';
import * as actions from './game.actions';
import { SnackbarService } from '@glotrix/ui/snackbar';
import { PlayerService } from '../../core/services/player.service';
import { StatusBoardFirebaseService, StatusBoard } from '../../core/services/state-firebase.service';
import { Store, select } from '@ngrx/store';
import { GameState } from '.';
import { getCards, getHandInfo, getMissionInfo } from './game.selectors';
import { MissionFirebaseService } from '../../core/services/mission.firebase.service';
import { Mission, User, Player } from '../../models';

@Injectable()
export class GameEffects {

	private readonly gameTitle = 'The Ressistance';

	constructor(private actions$: Actions,
		private snackbarService: SnackbarService,
		private statusService: StatusBoardFirebaseService,
		private missionService: MissionFirebaseService,
		private gameStore: Store<GameState>,
		private playerService: PlayerService) { }

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
				return actions.signOutSuccess();
			}
			)));

	startGame$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.startGame),
			switchMap(async action => {
				const cards = await this.playerService.generateCards().toPromise();
				const firstPlayer = await this.playerService.getFirstPlayer().toPromise();
				await this.statusService.update(StatusBoard.status, {
					hasGameStarted: true,
					shouldDragCards: true,
					playerInTurn: firstPlayer.id,
					cards
				});
				this.snackbarService.showSuccess("Let's start playing!", this.gameTitle);
				return actions.gameStarted();
			}
			)
		)
	);

	pickUpCard$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.pickUpCard),
			switchMap(async action => {
				const handInfo = await this.gameStore.pipe(select(getHandInfo), take(1)).toPromise();
				const userCard = handInfo.cards[0];
				const remainingCards = handInfo.cards.slice(1, handInfo.cards.length);
				await this.playerService.updatePlayer(userCard).toPromise();
				await this.statusService.update(StatusBoard.status, {
					playerInTurn: handInfo.nextPlayerTurn,
					shouldDragCards: !handInfo.isPickUpCompleted,
					cards: remainingCards
				});
				return actions.pickUpCardSuccess({ card: userCard });
			}
			)
		)
	);

	revealSpies$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.revealSpies),
			switchMap(async action => {
				await this.statusService.update(StatusBoard.status, {
					wereSpiesRevealed: true
				});
				return actions.revealSpiesSuccess();
			}
			)
		)
	);

	setMission$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.setMission),
			switchMap(async action => {
				const info = await this.gameStore.pipe(select(getMissionInfo), take(1)).toPromise();
				const mission = new Mission(info.missionNumber, info.userPlayer, action.users);
				await this.missionService.create(mission);
				this.snackbarService.showSuccess('The mission was propposed', this.gameTitle);
				return actions.setMissionSuccess();
			}
			)
		)
	);

}
