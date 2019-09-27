export interface Player {
	playerId: number;
	order: number;
	userName: string;
	photoUrl: string;
	score: number;
	isStoryTeller?: boolean;
}
