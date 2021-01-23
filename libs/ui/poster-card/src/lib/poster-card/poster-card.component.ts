import { Component, OnInit, Input } from '@angular/core';
import { Poster } from '../models/Poster';

@Component({
	selector: 'gt-poster-card',
	templateUrl: './poster-card.component.html',
	styleUrls: ['./poster-card.component.scss']
})
export class PosterCardComponent implements OnInit {

	@Input() poster: Poster;
	constructor() { }

	ngOnInit() {
	}

}
