import { Component, Input, OnChanges } from '@angular/core';
import { Player } from '../../../models';
import { BoardCard } from '../../../models/BoardCard';
import { Store } from '@ngrx/store';
import { GameState, setBoardCard } from '../../../store/game';

@Component({
	selector: 'gt-card-selector',
	templateUrl: './card-selector.component.html',
	styleUrls: ['./card-selector.component.scss']
})
export class CardSelectorComponent implements OnChanges {

	@Input() cardIndex: number;
	@Input() userPlayer: Player;

	constructor(private gameStore: Store<GameState>) { }

	ngOnChanges() { }

	get message() {
		return this.cardIndex ? 'Do you want to throw this card?' : 'Select a card to throw';
	}

	throwCard(userPlayer: Player) {
		if (!this.cardIndex) {
			console.log("You have to select a card first!");
			return;
		}
		const boardCard: BoardCard = { id: this.cardIndex, cardIndex: this.cardIndex, owner: userPlayer, votes: [] };
		this.gameStore.dispatch(setBoardCard({ boardCard }));
	}
}
