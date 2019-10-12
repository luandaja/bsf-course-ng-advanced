import { Component, Input, OnChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GameState, setVote, getPlayerVoteInfo } from '../../../store/game';
import { BoardCard } from '../../../models/BoardCard';
import { SnackbarService } from '@glotrix/ui/snackbar';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
	selector: 'gt-vote-editor',
	templateUrl: './vote-editor.component.html',
	styleUrls: ['./vote-editor.component.scss']
})
export class VoteEditorComponent implements OnChanges {
	isVisible$: Observable<boolean>;
	@Input() selectedCard: BoardCard = null;

	constructor(private gameStore: Store<GameState>,
		private snackbarService: SnackbarService) { }


	ngOnChanges() {
		this.isVisible$ = this.gameStore.pipe(select(getPlayerVoteInfo),
			map(voteInfo => {
				return this.selectedCard === null ? false : (voteInfo.playerCanVote && voteInfo.userPlayerId !== this.selectedCard.owner.id);
			})
		);
	}

	get message() {
		return this.selectedCard ? 'Do you want to vote for this card?' : 'Select the card you want to vote for';
	}

	vote(): void {
		if (!this.selectedCard) {
			this.snackbarService.showWarning('You have to select a card to vote for!', 'Dixit');
			return;
		}
		this.gameStore.dispatch(setVote({ boardCard: this.selectedCard }));
	}
}
