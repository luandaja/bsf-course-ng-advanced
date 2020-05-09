import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Recipe } from '../../../models/Recipe';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { RecipeState, getRecipe } from '../../../store/recipe';

@Component({
	selector: 'gt-recipes-detail',
	templateUrl: './recipes-detail.component.html',
	styleUrls: ['./recipes-detail.component.scss']
})
export class RecipesDetailComponent implements OnInit, OnDestroy {
	recipeId$: Subscription;
	recipe$: Observable<Recipe>;


	constructor(private route: ActivatedRoute, private store: Store<RecipeState>) { }

	ngOnInit() {
		this.recipeId$ = this.route.params.subscribe(params => this.loadRecipe(Number(params['id'])));
	}

	loadRecipe(id: number) {
		console.log("id: " + id);

		this.recipe$ = this.store.pipe(select(getRecipe));
	}

	ngOnDestroy(): void {
		this.recipeId$.unsubscribe();
	}

}
