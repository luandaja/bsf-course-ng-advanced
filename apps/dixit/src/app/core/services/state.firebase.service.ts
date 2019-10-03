import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { CurrentState } from '../../models/State';

@Injectable({
	providedIn: 'root'
})

export class StateFirebaseService extends FirestoreService<CurrentState> {

	protected basePath = 'game-state';

}
