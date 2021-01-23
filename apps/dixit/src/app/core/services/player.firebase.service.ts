import { Injectable } from '@angular/core';
import { Player } from '../../models';
import { FirestoreService } from './firestore.service';

@Injectable({
	providedIn: 'root'
})
export class PlayerFirebaseService extends FirestoreService<Player> {

	protected basePath = 'players';

}
