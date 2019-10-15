import { CardType } from '.';

export interface CardMap {
	[key: number]: { image: string, cardType: CardType };
}
