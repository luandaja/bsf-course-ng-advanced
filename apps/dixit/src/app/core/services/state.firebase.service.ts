import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { BoardStatus } from '../../models';

@Injectable({
	providedIn: 'root'
})

export class StatusBoardFirebaseService extends FirestoreService<BoardStatus> {

	protected basePath = 'status-board';

}

export enum StatusBoard {
	status = 'status'
}
