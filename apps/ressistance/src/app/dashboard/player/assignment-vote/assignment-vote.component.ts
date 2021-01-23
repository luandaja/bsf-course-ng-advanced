import { Component, OnInit } from '@angular/core';
import { Card } from '../../../models';
import { Store } from '@ngrx/store';
import { GameState, supportAssingment, rejectAssingment, getCanVoteForAssignment } from '../../../store/game';
import { Observable } from 'rxjs';

@Component({
	selector: 'gt-assignment-vote',
	templateUrl: './assignment-vote.component.html',
	styleUrls: ['./assignment-vote.component.scss']
})
export class AssignmentVoteComponent implements OnInit {
	canVote$: Observable<boolean>;
	supportCard = Card.Support;
	rejectCard = Card.Reject;

	constructor(private gameStore: Store<GameState>) { }

	ngOnInit() {
		this.canVote$ = this.gameStore.select(getCanVoteForAssignment);
	}

	support() {
		this.gameStore.dispatch(supportAssingment());
	}

	reject() {
		this.gameStore.dispatch(rejectAssingment());
	}

}
