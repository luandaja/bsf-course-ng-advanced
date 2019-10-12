export class Player {
	id: string;
	username: string;
	photoUrl: string;
	order: number;
	score = 0;
	isStoryTeller?= false;
	hasVoted?= false;
	hasThrowCard?= false;

	constructor(userName: string, photoUrl: string, order: number) {
		this.username = userName;
		this.photoUrl = photoUrl;
		this.order = order;
		this.isStoryTeller = order === 1;
	}
}
