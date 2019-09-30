export interface Player {
	playerId: number;
	userName: string;
	photoUrl: string;
	score: number;
	isStoryTeller?: boolean;
	hasVoted?: boolean;
	hasThrowCard?: boolean;
}
