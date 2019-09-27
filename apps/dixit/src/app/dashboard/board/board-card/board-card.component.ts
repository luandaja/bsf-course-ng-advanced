import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { BoardCard } from '../../../models/BoardCard';
import { Store, select } from '@ngrx/store';
import { GameState, getVotesVisibility } from '../../../store/game';

@Component({
	selector: 'gt-board-card',
	templateUrl: './board-card.component.html',
	styleUrls: ['./board-card.component.scss']
})
export class BoardCardComponent implements OnChanges {
	areVotesVisible$: Observable<boolean>;

	@Input() isRevealed: boolean;
	@Input() isJumping: boolean;
	@Input() isSelected: boolean;
	@Input() boardCard: BoardCard;

	constructor(private gameStore: Store<GameState>) { }

	ngOnChanges(): void {
		this.areVotesVisible$ = this.gameStore.pipe(select(getVotesVisibility));
	}

}
