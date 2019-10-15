import { Component, OnInit } from '@angular/core';
import { Card } from '../../../models';

@Component({
	selector: 'gt-assignment-vote',
	templateUrl: './assignment-vote.component.html',
	styleUrls: ['./assignment-vote.component.scss']
})
export class AssignmentVoteComponent implements OnInit {

	support: Card = Card.Support;
	reject: Card = Card.Reject;

	constructor() { }

	ngOnInit() {
	}

}
