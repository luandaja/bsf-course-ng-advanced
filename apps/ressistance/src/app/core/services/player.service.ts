import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GameState, getUsers, getFirstPlayerId, getUserPlayer } from '../../store/game';
import { map, take, switchMap } from 'rxjs/operators';
import { shuffle } from '../../../../../shared/Util';
import { Player } from '../../models';
import { PlayerFirebaseService as PlayerFirebaseService } from './player.firebase.service';
@Injectable({
	providedIn: 'root'
})
export class PlayerService {
	private readonly playersConfig: { players: number, spies: number }[] = [
		{ players: 3, spies: 1 },
		{ players: 5, spies: 2 },
		{ players: 6, spies: 2 },
		{ players: 7, spies: 3 },
		{ players: 8, spies: 3 },
		{ players: 9, spies: 3 },
		{ players: 10, spies: 4 },
	];

	constructor(private gameStore: Store<GameState>,
		private firestore: PlayerFirebaseService) { }

	collection$() {
		return this.firestore.collection$();
	}

	add(username: string, photoUrl: string) {
		return this.gameStore.select(getUsers).pipe(
			take(1),
			map(players => players.length),
			switchMap(async (playersCount) => {
				const user = new Player(username, photoUrl, playersCount + 1);
				user.id = this.firestore.generateId();
				await this.firestore.create(user);
				return user;
			})
		);
	}

	updatePlayer(isSpy) {
		return this.gameStore.select(getUserPlayer).pipe(
			take(1),
			switchMap(async userPlayer => {
				const player = { ...userPlayer, isSpy };
				await this.firestore.update(player.id, player);
				return player;
			})
		);
	}


	generateCards() {
		//const userst = await this.gameStore.select(getUsers).toPromise();
		return this.gameStore.pipe(select(getUsers), take(1), map(users => {
			const configuration = this.playersConfig.find(config => config.players === users.length);
			return this.getCards(configuration.spies, users.length);
		}))
	}

	getFirstPlayer() {
		return this.gameStore.select(getFirstPlayerId).pipe(take(1));
	}

	private getCards(spies: number, players: number) {
		const cards: boolean[] = [];
		for (let i = 0; i < spies; i++) {
			cards.push(true);
		}
		for (let i = 0; i < players - spies; i++) {
			cards.push(false);
		}
		return shuffle(cards);
	}
}
