import { Injectable, Inject, InjectionToken } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

export const DIXIT_STORAGE =
	new InjectionToken<StorageService>('dixit-storage');

@Injectable({
	providedIn: 'root'
})
export class LocalStorageService {

	constructor(@Inject(DIXIT_STORAGE) private storage: StorageService) {

	}

	set<T>(key: StorageKey, value: T) {
		this.storage.set(key, value);
	}

	get(key: StorageKey) {
		return this.storage.get(key);
	}

}

export enum StorageKey {
	userPlayer = 'userPlayer',
	currentHand = 'currentHand',
	isLogged = 'isLogged',
	isGuessingTime = 'isGuessingTime',
	isFirstRound = 'isFirstRound'
}

