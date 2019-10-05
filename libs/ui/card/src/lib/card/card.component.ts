// import { Component, OnInit, OnChanges, Input } from '@angular/core';

// @Component({
// 	selector: 'gt-card',
// 	templateUrl: './card.component.html',
// 	styleUrls: ['./card.component.scss']
// })
// export class CardComponent implements OnChanges {

// 	protected cardImage: string;
// 	private readonly reverseCardUrl = "assets/cards/reverse_card.jpg";

// 	@Input() cardIndex: number;
// 	@Input() isRevealed: boolean;
// 	@Input() isJumping: boolean;


// 	constructor() {
// 		this.cardImage = this.reverseCardUrl;
// 	}

// 	ngOnChanges(): void {
// 		this.cardImage = this.isRevealed ? this.getImageUrl() : this.reverseCardUrl;
// 	}

// 	getImageUrl(): string {
// 		const card_index = this.cardIndex > 10 ? this.cardIndex : `0${this.cardIndex}`;
// 		return `assets/cards/card_000${card_index}.jpg`;
// 	}

// }
