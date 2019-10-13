import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameState, getUserPlayer, pickUpCard, getTurnInfo, getIsPickingUpCard, revealSpies, getSpiesInfo, getAbleToRevealSpies } from '../../../store/game';
import { Store, select } from '@ngrx/store';
import { map, distinctUntilChanged, take, timeout, tap } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { User } from '../../../models';

@Component({
	selector: 'gt-hand',
	templateUrl: './hand.component.html',
	styleUrls: ['./hand.component.scss']
})
export class HandComponent implements OnInit, OnDestroy {
	private playerTurnChanges$: Subscription;
	private spiesViewChanges$: Subscription;
	isSpy$: Observable<boolean>;
	ableToRevealSpies$: Observable<boolean>;
	isPickingUpCards$: Observable<boolean>;
	spies: string[] = [];
	areSpiesVisible = true;

	constructor(private gameStore: Store<GameState>) { }

	ngOnInit() {
		this.isSpy$ = this.gameStore.pipe(select(getUserPlayer), map(user => user.isSpy));
		this.isPickingUpCards$ = this.gameStore.select(getIsPickingUpCard);
		this.ableToRevealSpies$ = this.gameStore.select(getAbleToRevealSpies);

		this.playerTurnChanges$ = this.gameStore.pipe(select(getTurnInfo), distinctUntilChanged((x, y) => x.isUserTurn === y.isUserTurn)).subscribe((turnInfo) => {
			if (turnInfo.isUserTurn)
				this.gameStore.dispatch(pickUpCard());
		});
		this.spiesViewChanges$ = this.gameStore.pipe(select(getSpiesInfo), distinctUntilChanged((x, y) => x.wereSpiesRevealed === y.wereSpiesRevealed)).subscribe(info => {
			if (info.wereSpiesRevealed)
				this.makeSpiesVisible(info.spies);
		});
	}

	showSpies() {
		this.gameStore.dispatch(revealSpies());
	}

	ngOnDestroy() {
		this.playerTurnChanges$.unsubscribe();
		this.spiesViewChanges$.unsubscribe();
	}

	private makeSpiesVisible(spies: string[]) {
		this.spies = spies;
		setTimeout(() => {
			this.areSpiesVisible = false;
		}, 2000);
	}

}
