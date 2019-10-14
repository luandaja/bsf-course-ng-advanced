import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { User, Player } from '../../models';

@Injectable({
	providedIn: 'root'
})
export class PlayerFirebaseService extends FirestoreService<Player> {

	protected basePath = 'users';//TODO: change to players

}
