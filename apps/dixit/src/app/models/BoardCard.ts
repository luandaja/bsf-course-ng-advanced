import { Player } from './Player';

export interface BoardCard {
	cardIndex: number;
	owner: Player;
	votes: Player[];
}
