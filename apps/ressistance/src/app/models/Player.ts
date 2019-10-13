import { User } from '.';

export interface Player extends User {
	isLeader: boolean;
}
