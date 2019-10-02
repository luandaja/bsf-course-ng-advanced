import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { StoryCard } from '../../models/StoryCard';

@Injectable({
	providedIn: 'root'
})
export class StoryFirebaseService extends FirestoreService<StoryCard> {

	protected basePath = 'story-card';

}
