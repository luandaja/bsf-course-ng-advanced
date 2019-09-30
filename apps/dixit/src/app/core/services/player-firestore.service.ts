import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { Player } from '../../models/Player';
import { map, exhaustMap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { GameState, getPlayers } from '../../store/game';

@Injectable({
	providedIn: 'root'
})
export class PlayerFirestoreService extends FirestoreService<Player>{

	protected basePath = 'players';

	constructor(protected firestore: AngularFirestore,
		private gameStore: Store<GameState>) {
		super(firestore);
	}

	add(username: string, photoUrl: string) {
		return this.gameStore.select(getPlayers).pipe(
			map((players => players.length)),
			exhaustMap(playersCount => {
				const user = new Player(username, photoUrl, playersCount + 1);
				return super.create(user).pipe(map(_ => user));
			})
		);
	}

}
