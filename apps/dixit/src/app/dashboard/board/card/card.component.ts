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

	areVotesVisible$: Observable<boolean>;

	protected cardImage: string;
	private readonly reverseCardUrl = "assets/cards/reverse_card.jpg";

	@Input() card: BoardCard;
	@Input() isRevealed: boolean;
	@Input() isJumping: boolean;
	@Input() isSelected: boolean;

	constructor(private gameStore: Store<GameState>) {
		this.cardImage = this.reverseCardUrl;
	}

	ngOnChanges(): void {
		this.areVotesVisible$ = this.gameStore.pipe(select(getVotesVisibility));
		this.cardImage = this.isRevealed ? this.getImageUrl() : this.reverseCardUrl;
	}

	getImageUrl(): string {
		const card_index = this.card.cardIndex > 10 ? this.card.cardIndex : `0${this.card.cardIndex}`;
		return `assets/cards/card_000${card_index}.jpg`;
	}

}
