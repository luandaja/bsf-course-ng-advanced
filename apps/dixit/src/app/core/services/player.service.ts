import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { Player } from '../../models';
import { AngularFirestore } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { GameState, getPlayers } from '../../store/game';
import { map, exhaustMap } from 'rxjs/operators';
import { PlayerFirebaseService } from './player.firebase.service';

@Injectable({
	providedIn: 'root'
})
export class PlayerService {

	protected basePath = 'players';

	constructor(private firestore: PlayerFirebaseService,
		private gameStore: Store<GameState>) {
	}

	add(username: string, photoUrl: string) {
		return this.gameStore.select(getPlayers).pipe(
			map((players => players.length)),
			exhaustMap(playersCount => {
				const user = new Player(username, photoUrl, playersCount + 1);
				return this.firestore.create(user).pipe(map(_ => user));
			})
		);
	}
}
