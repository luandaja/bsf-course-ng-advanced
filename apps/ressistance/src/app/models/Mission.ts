import { Player } from './Player';

export class Mission {
	id: string;
	members: string[];
	supportingAssignment: string[];
	rejectingAssignment: string[];
	votes: boolean[];
	hasBeenProposed: boolean;
	isApproved?: boolean;
	leader: string;

	constructor(currentMission: number, leader: Player, members: Player[]) {
		this.id = currentMission.toString();
		this.leader = leader.photoUrl;
		this.members = members.map(member => member.photoUrl);
		this.supportingAssignment = [];
		this.rejectingAssignment = [];
		this.votes = [];
		this.isApproved = false;
		this.hasBeenProposed = true;
	}

}
