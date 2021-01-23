import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../../../models';
import { Store, select } from '@ngrx/store';
import { GameState, getUserPlayer, getIsPickingUpCard } from '../../../store/game';
import { map } from 'rxjs/operators';

@Component({
	selector: 'gt-character-card',
	templateUrl: './character-card.component.html',
	styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {
	card$: Observable<Card>;
	isPickingUpCards$: Observable<boolean>;

	constructor(private gameStore: Store<GameState>) { }

	ngOnInit() {
		this.card$ = this.gameStore.pipe(select(getUserPlayer), map(user => user.isSpy ? Card.Spy : Card.Ally));
		this.isPickingUpCards$ = this.gameStore.select(getIsPickingUpCard);
	}

}
