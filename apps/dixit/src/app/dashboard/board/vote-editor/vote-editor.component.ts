import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameState, setVote } from '../../../store/game';
import { Player } from '../../../models';
import { BoardCard } from '../../../models/BoardCard';

@Component({
	selector: 'gt-vote-editor',
	templateUrl: './vote-editor.component.html',
	styleUrls: ['./vote-editor.component.scss']
})
export class VoteEditorComponent implements OnChanges {

	@Input() selectedCard: BoardCard;
	@Input() userPlayer: Player;

	constructor(private gameStore: Store<GameState>) { }

	ngOnChanges() { }

	get message() {
		return this.selectedCard ? 'Do you want to vote for this card?' : 'Select the card you want to vote for';
	}

	vote(): void {
		if (!this.selectedCard) {
			console.log("You have to select a card to vote for");
			return;
		}
		this.selectedCard.votes.push(this.userPlayer);
		this.gameStore.dispatch(setVote({ boardCard: this.selectedCard }));
	}
}
