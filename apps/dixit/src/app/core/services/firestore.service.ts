import { Injectable } from '@angular/core';
import { AngularFirestore, QueryFn } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export abstract class FirestoreService<T> {

	protected abstract basePath: string;

	constructor(protected firestore: AngularFirestore) { }

	private get collection() {
		return this.firestore.collection(`${this.basePath}`);
	}

	create(value: T) {
		const id = this.firestore.createId();
		return from(this.collection.doc(id).set(Object.assign({}, { id }, value)))
	}

	delete(id: string) {
		return this.collection.doc(id).delete()
	}

	doc$(id: string): Observable<T> {
		return this.firestore.doc<T>(`${this.basePath}/${id}`).valueChanges();
	}

	collection$(queryFn?: QueryFn): Observable<T[]> {
		return this.firestore.collection<T>(`${this.basePath}`, queryFn).valueChanges();
	}
}
