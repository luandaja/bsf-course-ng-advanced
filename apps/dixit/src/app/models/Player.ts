export class Player {
	id: number;
	username: string;
	photoUrl: string;
	score = 0;
	isStoryTeller?= false;
	hasVoted?= false;
	hasThrowCard?= false;

	constructor(userName: string, photoUrl: string, id: number) {
		this.username = userName;
		this.photoUrl = photoUrl;
		this.id = id;
		this.isStoryTeller = id === 1;
	}
}
