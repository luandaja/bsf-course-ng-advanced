import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../models/recipe';

@Component({
	selector: 'gt-recipe-card',
	templateUrl: './recipe-card.component.html',
	styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {

	@Input() recipe: Recipe;
	constructor() { }

	ngOnInit() { }

}
