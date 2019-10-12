import { Injectable } from '@angular/core';
import { AngularFirestore, QueryFn } from '@angular/fire/firestore';
import { Observable, from, combineLatest, of } from 'rxjs';
import { map, exhaustMap, take } from 'rxjs/operators';
import { BoardCard } from '../../models/BoardCard';
import { StoryCard } from '../../models/StoryCard';

@Injectable({
	providedIn: 'root'
})
export abstract class FirestoreService<T> {

	protected abstract basePath: string;

	constructor(protected firebase: AngularFirestore) { }

	private get collection() {
		return this.firebase.collection(`${this.basePath}`);
	}

	merge(value: any) {
		return this.collection.doc(value.id + '').set(Object.assign({}, { id: '' + value.id }, value), { merge: true });
	}

	generateId() {
		return this.firebase.createId();
	}
	create(value: any) {
		return from(this.collection.doc(value.id + '').set(Object.assign({}, { id: '' + value.id }, value)));
	}

	delete(id: string) {
		return from(this.collection.doc(id).delete())
	}


	update(id: string, value: T) {
		return this.firebase.collection<T>(`${this.basePath}`).doc(id).update(value);
	}

	deleteCollection() {
		return this.firebase.collection(`${this.basePath}`)
			.get()
			.pipe(map(res => {
				res.forEach(element => {
					element.ref.delete();
				});
			}));
	}
	deleteQueryBatch(ids: string[]) {
		const queries = ids.map(element => this.firebase.collection(`${this.basePath}`).doc(element).snapshotChanges());
		Object.assign([], queries)
		return combineLatest(Object.assign([], queries))
			.pipe(
				take(1),
				exhaustMap((querySnapshot) => {
					const batch = this.firebase.firestore.batch();
					querySnapshot.forEach(function (doc: any) {
						batch.delete(doc.payload.ref);
					});
					return batch.commit();
				})
			);
	}

	insertBatch(cards: number[]) {
		const batch = this.firebase.firestore.batch();
		cards.forEach((cardIndex, index) => {
			const docReference = this.firebase.collection(`${this.basePath}`).doc(cardIndex.toString()).ref;
			batch.set(docReference, { id: cardIndex, cardIndex, order: index });
		});
		return batch.commit();
	}

	doc$(id: string): Observable<T> {
		return this.firebase.collection(`${this.basePath}`).doc<T>(id).valueChanges();
	}

	collection$(queryFn?: QueryFn): Observable<T[]> {
		return this.firebase.collection<T>(`${this.basePath}`, queryFn).valueChanges();
	}

	initBoardCards(boardCards: BoardCard[]) {
		const batch = this.firebase.firestore.batch();
		boardCards.forEach(boardCard => {
			const docReference = this.firebase.collection(`${this.basePath}`).doc(boardCard.cardIndex.toString()).ref;
			batch.set(docReference, { ...boardCard, id: boardCard.cardIndex });
		});
		return batch.commit();
	}

	updateNextRounPlayer(userPlayerId: string, nextPlayerId: string) {
		const batch = this.firebase.firestore.batch();
		const nextPlayerReference = this.firebase.collection(`${this.basePath}`).doc(nextPlayerId).ref;
		const userPlayerReference = this.firebase.collection(`${this.basePath}`).doc(userPlayerId).ref;

		batch.update(nextPlayerReference, { isStoryTeller: true });
		batch.update(userPlayerReference, { isStoryTeller: false });

		return batch.commit();
	}

}
