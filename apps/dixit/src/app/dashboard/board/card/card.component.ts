import { Card } from './../../../models/Card';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
	selector: 'gt-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnChanges {

	protected cardImage: string;
	private readonly reverseCardUrl = "assets/cards/reverse_card.jpg";
	@Input() card: Card;

	constructor() {
		this.cardImage = this.reverseCardUrl;
	}

	ngOnChanges(): void {
		this.cardImage = this.card.isRevealed ? this.getImageUrl() : this.reverseCardUrl;
	}

	getImageUrl(): string {
		const card_index = this.card.cardIndex > 10 ? this.card.cardIndex : `0${this.card.cardIndex}`;
		return `assets/cards/card_000${card_index}.jpg`;
	}

}
