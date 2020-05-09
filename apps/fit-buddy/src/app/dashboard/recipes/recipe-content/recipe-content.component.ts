import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../../models/Recipe';

@Component({
	selector: 'gt-recipe-content',
	templateUrl: './recipe-content.component.html',
	styleUrls: ['./recipe-content.component.scss']
})
export class RecipeContentComponent implements OnInit {
	@Input() recipe: Recipe;
	isTabOneActive = true;
	isTabTwoActive = false;

	constructor() { }

	ngOnInit() { }

	selectTabOne() {
		this.isTabOneActive = true;
		this.isTabTwoActive = false;
	}

	selectTabTwo() {
		this.isTabOneActive = false;
		this.isTabTwoActive = true;
	}
}
