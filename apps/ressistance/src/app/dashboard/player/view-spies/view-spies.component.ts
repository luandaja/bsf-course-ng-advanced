import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { GameState, getAbleToRevealSpies, getSpiesInfo, revealSpies } from '../../../store/game';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
	selector: 'gt-view-spies',
	templateUrl: './view-spies.component.html',
	styleUrls: ['./view-spies.component.scss']
})
export class ViewSpiesComponent implements OnInit, OnDestroy {
	private spiesViewChanges$: Subscription;
	ableToRevealSpies$: Observable<boolean>;
	areSpiesVisible = true;
	spies: string[] = [];

	constructor(private gameStore: Store<GameState>) { }

	ngOnInit() {
		this.ableToRevealSpies$ = this.gameStore.select(getAbleToRevealSpies);
		this.spiesViewChanges$ = this.gameStore.pipe(select(getSpiesInfo), distinctUntilChanged((x, y) => x.wereSpiesRevealed === y.wereSpiesRevealed)).subscribe(info => {
			if (info.wereSpiesRevealed)
				this.makeSpiesVisible(info.spies);
		});
	}
	showSpies() {
		this.gameStore.dispatch(revealSpies());
	}

	ngOnDestroy() {
		this.spiesViewChanges$.unsubscribe();
	}

	private makeSpiesVisible(spies: string[]) {
		this.spies = spies;
		setTimeout(() => {
			this.areSpiesVisible = false;
		}, 2000);
	}

}
