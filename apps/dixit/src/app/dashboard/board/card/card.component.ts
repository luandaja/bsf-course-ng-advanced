import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { GameState, getVotesVisibility } from '../../../store/game';
import { BoardCard } from '../../../models/BoardCard';

@Component({
	selector: 'gt-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnChanges {
	protected cardImage: string;
	private readonly reverseCardUrl = "assets/cards/reverse_card.jpg";

	@Input() isRevealed: boolean;
	@Input() isJumping: boolean;
	@Input() isSelected: boolean;
	@Input() cardIndex: number;

	constructor() {
		this.cardImage = this.reverseCardUrl;
	}

	ngOnChanges(): void {
		this.cardImage = this.isRevealed ? this.getImageUrl() : this.reverseCardUrl;
	}

	getImageUrl(): string {
		const card_index = this.cardIndex >= 10 ? this.cardIndex : `0${this.cardIndex}`;
		return `assets/cards/card_000${card_index}.jpg`;
	}

}
