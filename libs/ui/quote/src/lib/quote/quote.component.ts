import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'gt-quote',
	templateUrl: './quote.component.html',
	styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

	@Input() photoUrl = '';
	@Input() quoteText: string;

	constructor() { }

	ngOnInit() {
	}

}
