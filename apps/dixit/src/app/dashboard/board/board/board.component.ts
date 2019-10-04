import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { GameState, getHasGameStarted, updateHasGameStarted } from '../../../store/game';
import { Store, select } from '@ngrx/store';
import { StatusBoardFirebaseService, StatusBoard } from '../../../core/services/state.firebase.service';

@Component({
	selector: 'gt-board',
	templateUrl: './board.component.html',
	styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnDestroy {

	// hasGameStarted$: Observable<boolean>;
	currentState$: Subscription;

	constructor(private gameStore: Store<GameState>,
		private stateService: StatusBoardFirebaseService) { }

	ngOnInit() {
		// this.hasGameStarted$ = this.gameStore.pipe(select(getHasGameStarted));
		this.currentState$ = this.stateService.doc$(StatusBoard.GameState).subscribe(currentState => {
			this.gameStore.dispatch(updateHasGameStarted({ hasGameStarted: currentState.hasGameStarted }));
		});
	}

	ngOnDestroy(): void {
		this.currentState$.unsubscribe();
	}

}
