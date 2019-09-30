export interface Player {
	id: number;
	username: string;
	photoUrl: string;
	score: number;
	isStoryTeller?: boolean;
	hasVoted?: boolean;
	hasThrowCard?: boolean;
}
