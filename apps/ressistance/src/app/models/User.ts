export class User {
	id: string;
	order: number;
	username: string;
	photoUrl: string;
	isSpy: boolean;
	isLeader: boolean;

	constructor(userName: string, photoUrl: string, order: number) {
		this.username = userName;
		this.photoUrl = photoUrl;
		this.order = order;
		this.isLeader = order === 1;
	}
}
