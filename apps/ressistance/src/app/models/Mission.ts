import { User } from '.';
import { Player } from './Player';

export class Mission {
	id: string;
	members: User[];
	supportingAssignment: User[];
	rejectingAssignment: User[];
	votes: boolean[];
	hasBeenProposed: boolean;
	isApproved?: boolean;
	leader: User;

	constructor(currentMission: number, leader: Player, members: Player[]) {
		this.id = currentMission.toString();
		this.leader = this.getUser(leader);
		this.members = members.map(member => this.getUser(member))
		this.supportingAssignment = [];
		this.rejectingAssignment = [];
		this.votes = [];
		this.isApproved = false;
		this.hasBeenProposed = true;
	}

	private getUser(player: Player) {
		return { id: player.id, photoUrl: player.photoUrl, username: player.username } as User;
	}

}
