import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { User } from '../../models';

@Injectable({
	providedIn: 'root'
})
export class UserFirebaseService extends FirestoreService<User> {

	protected basePath = 'users';

}
