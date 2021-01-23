import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, Mission } from '../../../models';
import { Store, select } from '@ngrx/store';
import { GameState, getCurrentMission } from '../../../store/game';

@Component({
	selector: 'gt-table-board',
	templateUrl: './table-board.component.html',
	styleUrls: ['./table-board.component.scss']
})
export class TableBoardComponent implements OnInit {

	constructor(private gameStore: Store<GameState>) { }

	ngOnInit() { }

}
