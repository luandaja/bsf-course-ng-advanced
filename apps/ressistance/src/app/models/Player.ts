import { User } from './User';
export class Player implements User {
	id: string;
	username: string;
	photoUrl: string;

	order: number;
	isSpy: boolean;

	constructor(userName: string, photoUrl: string, order: number) {
		this.username = userName;
		this.photoUrl = photoUrl;
		this.order = order;
	}
}
