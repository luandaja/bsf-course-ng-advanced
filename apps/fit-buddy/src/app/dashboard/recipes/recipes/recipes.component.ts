import { Component, OnInit } from '@angular/core';
import { Recipe } from '@glotrix/ui/card';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { RecipesState, getRecipes } from '../../../store/recipes';

@Component({
	selector: 'gt-recipes',
	templateUrl: './recipes.component.html',
	styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

	recipes$: Observable<Recipe[]>;

	constructor(private recipesStore: Store<RecipesState>) { }

	ngOnInit() {
		this.recipes$ = this.recipesStore.select(getRecipes);
	}

}
