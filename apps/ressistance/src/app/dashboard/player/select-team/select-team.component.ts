import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { GameState, getUsers, getMissionInfo, getUserAvatars, setMission, getIsTeamSelectable } from '../../../store/game';
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
	avatars$: Observable<string[]>;
	membersRequired$: Observable<number>;
	isTeamSelectable$: Observable<boolean>;

	constructor(private gameStore: Store<GameState>,
		private snackBarService: SnackbarService) { }

	ngOnInit() {
		this.avatars$ = this.gameStore.select(getUserAvatars);
		this.isTeamSelectable$ = this.gameStore.select(getIsTeamSelectable);
		this.membersRequired$ = this.gameStore.pipe(select(getMissionInfo),
			map(info => info.playersCount === 0 ? 0 : missionsConfig.find(x => x.players === info.playersCount).missions[info.missionNumber])
		);
	}

	onSelectionChanged(players: string[]) {
		this.members = players;
	}

	async setMembers() {
		const membersRequired = await this.membersRequired$.pipe(take(1)).toPromise();
		if (this.members.length !== membersRequired) {
			this.snackBarService.showWarning(`You need to select ${membersRequired} players for the mission!`, 'The Resistance');
			return;
		}
		const users = await this.gameStore.pipe(select(getUsers), take(1)).toPromise();
		const selectedMembers = users.filter(user => this.members.includes(user.photoUrl));
		this.gameStore.dispatch(setMission({ users: selectedMembers }));
	}

}
