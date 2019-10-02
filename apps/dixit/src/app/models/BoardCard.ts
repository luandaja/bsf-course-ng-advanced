import { Player } from './Player';

export interface BoardCard {
	id?: number;
	cardIndex: number;
	owner: Player;
	votes?: Player[];
}

// export class Card {

// 	cardIndex: number;

// 	getImageUrl(): string {
// 		const card_index = this.cardIndex >= 10 ? this.cardIndex : `0${this.cardIndex}`;
// 		return `assets/cards/card_000${card_index}.jpg`;
// 	}
// }
