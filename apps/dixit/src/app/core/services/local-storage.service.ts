import { Injectable, Inject, InjectionToken } from '@angular/core';
import { StorageService } from 'ngx-webstorage-service';

export const DIXIT_STORAGE =
	new InjectionToken<StorageService>('dixit-storage');

@Injectable({
	providedIn: 'root'
})
export class LocalStorageService {

	constructor(@Inject(DIXIT_STORAGE) private storage: StorageService) { }

	set<T>(key: StorageKey, value: T) {
		this.storage.set(key, value);
	}

	get(key: StorageKey) {
		return this.storage.get(key);
	}

	clear() {
		this.storage.remove(StorageKey.userPlayer);
		this.storage.remove(StorageKey.currentHand);
		this.storage.remove(StorageKey.isLogged);
		this.storage.remove(StorageKey.isGuessingTime);
		this.storage.remove(StorageKey.isRoundFirst);
	}

}

export enum StorageKey {
	userPlayer = 'userPlayer',
	currentHand = 'currentHand',
	isLogged = 'isLogged',
	isGuessingTime = 'isGuessingTime',
	isRoundFirst = 'isRoundFirst'
}

