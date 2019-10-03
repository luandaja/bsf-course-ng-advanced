import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameState, setUserHand, getIsLoading, getTurnInfo, setVotesVisibility, updateCurrentTurn, avaiableCardsLoaded, currentStorySetted } from '../../../store/game';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { StateFirebaseService } from '../../../core/services/state.firebase.service';
// import { StoryFirebaseService } from '../../../core/services/story.firebase.service';
import { AvaiableCardsService } from '../../../core/services/avaiable-cards.firebase.service';
import { BoardCardsFirestoreService } from '../../../core/services/board-cards.firestore.service';

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
		private boardCardService: BoardCardsFirestoreService,

		// private storyService: StoryFirebaseService,
		private cardsService: AvaiableCardsService, ) { }

	ngOnInit() {
		this.onGameStart();
		this.isLoading$ = this.gameStore.select(getIsLoading);
		this.playerHand = this.gameStore.pipe(select(getTurnInfo)).subscribe((turnInfo) => {
			console.log("turnInfo", turnInfo);
			if (turnInfo.isUserTurn)
				this.gameStore.dispatch(setUserHand({ cardsCount: turnInfo.cardsCount }));
		});
	}

	private onGameStart() {
		this.avaiableCards$ = this.cardsService.collection$()
			.subscribe(cards => this.gameStore.dispatch(avaiableCardsLoaded({ cards })));

		this.currentState$ = this.stateService.doc$("game-room").subscribe(currentState => {
			console.log("table-board", currentState);
			this.gameStore.dispatch(setVotesVisibility({ areVotesVisible: currentState.areVotesVisible }));
			this.gameStore.dispatch(updateCurrentTurn({ currentTurn: currentState.currentTurn }));
			this.gameStore.dispatch(currentStorySetted({ currentStory: currentState.currentStory }));
		});
	}

	seed() {
		const ale = { id: 1, username: 'Ale', photoUrl: 'https://bit.ly/2ngbfJT', score: 0, isStoryTeller: true, hasVoted: false, hasThrowCard: false };
		const pao = { id: 2, username: 'Pao', photoUrl: 'https://bit.ly/2mLcpgt', score: 0, isStoryTeller: false, hasVoted: false, hasThrowCard: true };
		const walter = { id: 3, username: 'Walter', photoUrl: 'https://bit.ly/2lQfYBH', score: 0, isStoryTeller: false, hasVoted: true, hasThrowCard: true };
		const myriam = { id: 4, username: 'Myriam', photoUrl: 'https://bit.ly/2lOjrAQ', score: 0, isStoryTeller: false, hasVoted: false, hasThrowCard: true };
		const brenda = { id: 5, username: 'Brenda', photoUrl: 'https://bit.ly/2leFz7h', score: 0, isStoryTeller: false, hasVoted: true, hasThrowCard: true };
		const vico = { id: 6, username: 'Vico', photoUrl: 'https://bit.ly/2nmE0ov', score: 0, isStoryTeller: false, hasVoted: true, hasThrowCard: true };

		const cards = [
			{ cardIndex: 2, owner: pao, votes: [walter, brenda] },
			{ cardIndex: 6, owner: walter, votes: [] },
			{ cardIndex: 12, owner: myriam, votes: [vico] },
			{ cardIndex: 34, owner: brenda, votes: [] },
			{ cardIndex: 27, owner: vico, votes: [] },
			{ cardIndex: 78, owner: ale, votes: [] }
		]
		this.boardCardService.initBoardCards(cards);
		const story = { cardIndex: 78, title: 'test story', storyTeller: ale };
		this.stateService.update("game-room", { currentStory: story });
	}
	ngOnDestroy(): void {
		this.playerHand.unsubscribe();
		this.avaiableCards$.unsubscribe();
		this.currentStory$.unsubscribe();
		this.currentState$.unsubscribe();
	}
}
