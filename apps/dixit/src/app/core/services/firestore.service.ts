import { Injectable } from '@angular/core';
import { AngularFirestore, QueryFn } from '@angular/fire/firestore';
import { Observable, from, combineLatest } from 'rxjs';
import { map, tap, exhaustMap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export abstract class FirestoreService<T> {

	protected abstract basePath: string;

	constructor(protected firebase: AngularFirestore) { }

	private get collection() {
		return this.firebase.collection(`${this.basePath}`);
	}

	create(value: T) {
		const id = this.firebase.createId();
		return from(this.collection.doc(id).set(Object.assign({}, { id }, value)))
	}

	delete(id: string) {
		return from(this.collection.doc(id).delete())
	}

	doc$(id: string): Observable<T> {
		return this.firebase.doc<T>(`${this.basePath}/${id}`).valueChanges();
	}

	collection$(queryFn?: QueryFn): Observable<T[]> {
		return this.firebase.collection<T>(`${this.basePath}`, queryFn).valueChanges();
	}

	update(id: string, value: T) {
		return from(this.firebase.collection<T>(`${this.basePath}`).doc(id).update(value));
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
		const queries = ids.map(element => this.firebase.collection(`${this.basePath}`).doc(element).valueChanges());
		return combineLatest(...queries)
			.pipe(
				exhaustMap((querySnapshot) => {
					const batch = this.firebase.firestore.batch();
					querySnapshot.forEach(function (doc) {
						// For each doc, add a delete operation to the batch
						batch.delete(doc.ref);
					});
					// Commit the batch
					return batch.commit();
				})
			);
	}

}