import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { GameState, getIsLoading, setVotesVisibility, avaiableCardsLoaded, currentStorySetted, getVotesVisibility, updatePlayerScore } from '../../../store/game';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { StatusBoardFirebaseService, StatusBoard } from '../../../core/services/state.firebase.service';
import { AvaiableCardsService } from '../../../core/services/avaiable-cards.firebase.service';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Component({
	selector: 'gt-table-board',
	templateUrl: './table-board.component.html',
	styleUrls: ['./table-board.component.scss']
})

export class TableBoardComponent implements OnInit, OnDestroy {

	isLoading$: Observable<boolean>;
	private updateScore$: Subscription;
	private areVotesVisible$: Subscription;
	private currentStory$: Subscription;

	constructor(private gameStore: Store<GameState>,
		private stateService: StatusBoardFirebaseService) { }

	// @HostListener('window:beforeunload') goToPage() {
	// 	console.log("before refresh");
	// 	//	this.gameStore.dispatch(saveUser());
	// }
	ngOnInit() {
		this.onGameStart();
		this.isLoading$ = this.gameStore.select(getIsLoading);
	}

	private onGameStart() {

		this.updateScore$ = this.gameStore.select(getVotesVisibility).subscribe(areVotesVisible => {
			if (areVotesVisible) {
				this.gameStore.dispatch(updatePlayerScore());
			}
		})

		this.areVotesVisible$ = this.stateService.doc$(StatusBoard.VotesVisibility).pipe(distinctUntilChanged((x, y) => x.areVotesVisible === y.areVotesVisible))
			.subscribe(state => {
				this.gameStore.dispatch(setVotesVisibility({ areVotesVisible: state.areVotesVisible }));
			});

		this.currentStory$ = this.stateService.doc$(StatusBoard.CurrentStory).pipe(distinctUntilChanged((x, y) => x.currentStory === y.currentStory))
			.subscribe(state => {
				if (state.currentStory)
					this.gameStore.dispatch(currentStorySetted({ currentStory: state.currentStory }));
			});
	}

	ngOnDestroy(): void {
		this.updateScore$.unsubscribe();
		this.areVotesVisible$.unsubscribe();
		this.currentStory$.unsubscribe();
	}
}
