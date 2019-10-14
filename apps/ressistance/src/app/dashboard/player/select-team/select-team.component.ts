import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { GameState, getUsers, getMissionInfo, setMembersSuccess } from '../../../store/game';
import { map, take } from 'rxjs/operators';
import { SnackbarService } from '@glotrix/ui/snackbar';
import { User } from '../../../models';

const missionsConfig: { players: number, missions: number[] }[] = [
	{ players: 5, missions: [2, 3, 2, 3, 3] },
	{ players: 6, missions: [2, 3, 4, 3, 4] },
	{ players: 7, missions: [2, 3, 3, 4, 4] },
	{ players: 8, missions: [3, 4, 4, 5, 5] },
	{ players: 9, missions: [3, 4, 4, 5, 5] },
	{ players: 10, missions: [3, 4, 4, 5, 5] },
];

@Component({
	selector: 'gt-select-team',
	templateUrl: './select-team.component.html',
	styleUrls: ['./select-team.component.scss']
})
export class SelectTeamComponent implements OnInit {
	members: string[];
	avatars: string[];
	players: User[];
	missionChanges$: Subscription;
	membersRequired: number;
	title: string;

	constructor(private gameStore: Store<GameState>,
		private snackBarService: SnackbarService) { }

	async ngOnInit() {
		this.players = await this.gameStore.pipe(select(getUsers), take(1)).toPromise();
		this.avatars = this.players.map(player => player.photoUrl);
		await this.GetMembersRequired();
		this.title = `Select ${this.membersRequired} players for the mission!`;
	}

	onSelectionChanged(players: string[]) {
		this.members = players;
	}

	setMembers() {
		if (this.members.length !== this.membersRequired) {
			this.snackBarService.showWarning(`You need to select ${this.membersRequired} players for the mission!`, 'The Resistance');
			return;
		}
		const selectedMembers = this.players.filter(player => this.members.includes(player.photoUrl));
		this.gameStore.dispatch(setMembersSuccess({ users: selectedMembers }));
	}

	private async GetMembersRequired() {
		const missionInfo = await this.gameStore.pipe(select(getMissionInfo), take(1)).toPromise();
		this.membersRequired = missionsConfig.find(x => x.players === missionInfo.playersCount).missions[missionInfo.missionNumber];
	}
}
