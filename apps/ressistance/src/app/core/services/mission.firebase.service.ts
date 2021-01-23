import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { Mission } from '../../models';

@Injectable({
	providedIn: 'root'
})
export class MissionFirebaseService extends FirestoreService<Mission> {

	protected basePath = 'missions';

}
