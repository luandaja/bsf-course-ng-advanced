import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameState, getIsLoading, getVotesVisibility, updatePlayerScore } from '../../../store/game';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

@Component({
	selector: 'gt-table-board',
	templateUrl: './table-board.component.html',
	styleUrls: ['./table-board.component.scss']
})

export class TableBoardComponent implements OnInit, OnDestroy {

	isLoading$: Observable<boolean>;
	private playerScoreChanges$: Subscription;

	constructor(private gameStore: Store<GameState>) { }

	ngOnInit() {
		this.onGameStart();
		this.isLoading$ = this.gameStore.select(getIsLoading);
	}

	private onGameStart() {
		this.playerScoreChanges$ = this.gameStore.select(getVotesVisibility).subscribe(areVotesVisible => {
			if (areVotesVisible) {
				this.gameStore.dispatch(updatePlayerScore());
			}
		});
	}

	ngOnDestroy(): void {
		this.playerScoreChanges$.unsubscribe();
	}
}
