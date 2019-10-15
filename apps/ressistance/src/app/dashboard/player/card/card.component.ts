import { Component, OnInit, Input } from '@angular/core';
import { cardImages, reverseCardImages } from './card.info'
import { Card } from '../../../models';
@Component({
	selector: 'gt-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

	@Input() isRevealed = false;
	@Input() card: Card;

	constructor() { }

	ngOnInit() { }

	get cardImage() {
		const card = cardImages[this.card];
		return this.isRevealed ? card.image : reverseCardImages[card.cardType];
	}

	toggle() {
		this.isRevealed = !this.isRevealed;
	}

}


