import { Component, OnChanges, Input } from '@angular/core';
import { BoardCard } from '../../../models/BoardCard';

@Component({
	selector: 'gt-board-card',
	templateUrl: './board-card.component.html',
	styleUrls: ['./board-card.component.scss']
})
export class BoardCardComponent implements OnChanges {

	@Input() areVotesVisible: boolean;
	@Input() isRevealed: boolean;
	@Input() isJumping: boolean;
	@Input() isSelected: boolean;
	@Input() boardCard: BoardCard;

	constructor() { }

	ngOnChanges(): void { }

}
