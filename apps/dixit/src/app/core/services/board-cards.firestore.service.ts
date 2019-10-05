import { BoardCard } from '../../models/BoardCard';
import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';

@Injectable({
	providedIn: 'root'
})
export class BoardCardsFirestoreService extends FirestoreService<BoardCard>{

	protected basePath = 'board-cards';

}
