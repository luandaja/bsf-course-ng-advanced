import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { GameState, getIsLogged, currentStorySetted, setVotesVisibility, updateCurrentTurn, avaiableCardsLoaded, playersLoaded, updateHasGameStarted } from './store/game';
import { StateFirebaseService } from './core/services/state.firebase.service';
//import { StoryFirebaseService } from './core/services/story.firebase.service';
import { AvaiableCardsService } from './core/services/avaiable-cards.firebase.service';
import { PlayerService } from './core/services/player.service';

@Component({
	selector: 'gt-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
	isLoggedIn$: Subscription;
	// avaiableCards$: Subscription;
	// currentStory$: Subscription;
	// currentState$: Subscription;
	//players$: Subscription;

	constructor(
		private gameStore: Store<GameState>,
		//private playerService: PlayerService,
		private router: Router
		// private stateService: StateFirebaseService,
		// private storyService: StoryFirebaseService,
		// private cardsService: AvaiableCardsService,
	) { }

	ngOnInit(): void {
		this.isLoggedIn$ = this.gameStore.pipe(select(getIsLogged)).subscribe((isLogged) => this.onStart(isLogged));
	}

	private onStart(isLogged: boolean) {
		// if (isLogged) {
		// 	this.onLoggedIn();
		// }
		this.redirect(isLogged)
	}


	private redirect(isLogged: boolean) {
		const moduleUrl = isLogged ? '/dashboard' : '/login';
		this.router.navigate([moduleUrl]);
	}

	ngOnDestroy(): void {
		this.isLoggedIn$.unsubscribe();
		// this.avaiableCards$.unsubscribe();
		// this.currentStory$.unsubscribe();
		// this.currentState$.unsubscribe();
		//	this.players$.unsubscribe();
	}
}
