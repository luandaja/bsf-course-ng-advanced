import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GameState, getCurrentHand } from '../../../store/game';
import { Observable } from 'rxjs';

@Component({
	selector: 'gt-hand',
	templateUrl: './hand.component.html',
	styleUrls: ['./hand.component.scss']
})
export class HandComponent implements OnInit {
	handCards$: Observable<number[]>;
	constructor(private gameStore: Store<GameState>) { }

	ngOnInit() {
		this.handCards$ = this.gameStore.pipe(select(getCurrentHand));
	}

}
