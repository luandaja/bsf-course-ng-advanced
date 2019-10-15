import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Mission } from '../../../models';
import { Store } from '@ngrx/store';
import { GameState, getCurrentMission } from '../../../store/game';

@Component({
	selector: 'gt-mission',
	templateUrl: './mission.component.html',
	styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements OnInit {
	mission$: Observable<Mission>;

	constructor(private gameStore: Store<GameState>) { }

	ngOnInit() {
		this.mission$ = this.gameStore.select(getCurrentMission);
	}

}
