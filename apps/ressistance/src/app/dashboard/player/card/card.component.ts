import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'gt-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

	isRevealed = false;
	@Input() isSpy: boolean;

	constructor() { }

	ngOnInit() { }

	get cardImage() {
		const character = this.isSpy ? 'assets/cards/axis-1-en.jpg' : 'assets/cards/ally-1-en.jpg';//`${this.basePath}` : `${this.basePath}`;
		return this.isRevealed ? character : 'assets/cards/back-character-a.jpg';
	}

	toggle() {
		this.isRevealed = !this.isRevealed;
	}

}
