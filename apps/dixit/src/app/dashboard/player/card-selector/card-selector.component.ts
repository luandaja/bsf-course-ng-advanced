import { Component, Input, OnChanges } from '@angular/core';
import { Player } from '../../../models';
import { BoardCard } from '../../../models/BoardCard';
import { Store, select } from '@ngrx/store';
import { GameState, setBoardCard, getIsPlayersTurn } from '../../../store/game';
import { SnackbarService } from '@glotrix/ui/snackbar';
import { Observable } from 'rxjs';

@Component({
	selector: 'gt-card-selector',
	templateUrl: './card-selector.component.html',
	styleUrls: ['./card-selector.component.scss']
})
export class CardSelectorComponent implements OnChanges {
	@Input() cardIndex: number;
	@Input() userPlayer: Player;
	isPlayersTurn$: Observable<boolean>;

	constructor(private gameStore: Store<GameState>,
		private snackbarService: SnackbarService) { }

	ngOnChanges() {
		this.isPlayersTurn$ = this.gameStore.pipe(select(getIsPlayersTurn));
	}

	get message() {
		return this.cardIndex ? 'Do you want to throw this card?' : 'Select a card to throw';
	}

	throwCard(userPlayer: Player) {
		if (!this.cardIndex) {
			this.snackbarService.showWarning("You have to select a card first!", 'Dixit');
			return;
		}
		const boardCard: BoardCard = { id: this.cardIndex, cardIndex: this.cardIndex, owner: userPlayer, votes: [] };
		this.gameStore.dispatch(setBoardCard({ boardCard }));
	}
}
