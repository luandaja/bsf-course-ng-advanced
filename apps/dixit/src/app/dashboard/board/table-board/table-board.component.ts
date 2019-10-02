import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameState, setUserHand, getIsLoading, getTurnInfo, setVotesVisibility, updateCurrentTurn, updateHasGameStarted, avaiableCardsLoaded, currentStorySetted } from '../../../store/game';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { StateFirebaseService } from '../../../core/services/state.firebase.service';
import { StoryFirebaseService } from '../../../core/services/story.firebase.service';
import { AvaiableCardsService } from '../../../core/services/avaiable-cards.firebase.service';

@Component({
	selector: 'gt-table-board',
	templateUrl: './table-board.component.html',
	styleUrls: ['./table-board.component.scss']
})

export class TableBoardComponent implements OnInit, OnDestroy {

	isLoading$: Observable<boolean>;
	private playerHand: Subscription;
	private avaiableCards$: Subscription;
	private currentStory$: Subscription;
	private currentState$: Subscription;

	constructor(private gameStore: Store<GameState>,
		private stateService: StateFirebaseService,
		private storyService: StoryFirebaseService,
		private cardsService: AvaiableCardsService, ) { }

	ngOnInit() {
		this.isLoading$ = this.gameStore.select(getIsLoading);
		this.playerHand = this.gameStore.pipe(select(getTurnInfo)).subscribe((turnInfo) => {
			if (turnInfo.isUserTurn)
				this.gameStore.dispatch(setUserHand({ cardsCount: turnInfo.cardsCount }));
		});
		this.onGameStart();
	}

	private onGameStart() {
		this.avaiableCards$ = this.cardsService.collection$().subscribe(cards => this.gameStore.dispatch(avaiableCardsLoaded({ cards })));
		this.currentStory$ = this.storyService.doc$("game-room").subscribe(currentStory => this.gameStore.dispatch(currentStorySetted({ currentStory })));
		this.currentState$ = this.stateService.doc$("game-room").subscribe(currentState => {
			this.gameStore.dispatch(setVotesVisibility({ areVotesVisible: currentState.areVotesVisible }));
			this.gameStore.dispatch(updateCurrentTurn({ currentTurn: currentState.curentTurn }));
		});
	}

	ngOnDestroy(): void {
		this.playerHand.unsubscribe();
		this.avaiableCards$.unsubscribe();
		this.currentStory$.unsubscribe();
		this.currentState$.unsubscribe();
	}
}
