import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';

@Injectable({
	providedIn: 'root'
})
export class StateFirebaseService extends FirestoreService<{ curentTurn?: number, areVotesVisible?: boolean }> {

	protected basePath = 'game-state';

}
