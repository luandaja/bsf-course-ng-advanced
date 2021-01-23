import { Component, OnInit } from '@angular/core';
import { Recipe } from '@glotrix/ui/card';
import { Observable, combineLatest } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { RecipesOverviewState, getRecipes, getRecipesTotal } from '../../../store/recipes-overview';
import { RecipesFilterState, setKeywordFilter, changeCurrentPage, getPagination, getFilters } from '../../../store/recipes-filter';
import { map } from 'rxjs/operators';

@Component({
	selector: 'gt-recipes',
	templateUrl: './recipes.component.html',
	styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
	protected total$: Observable<number>;
	protected pagination$: Observable<any>;
	recipes$: Observable<Recipe[]>;

	constructor(private recipesStore: Store<RecipesOverviewState>,
		private filtersStore: Store<RecipesFilterState>) { }

	ngOnInit() {
		this.pagination$ = this.filtersStore.pipe(select(getPagination));
		this.total$ = this.recipesStore.pipe(select(getRecipesTotal));
		this.recipes$ = combineLatest(
			this.recipesStore.pipe(select(getRecipes)),
			this.filtersStore.pipe(select(getFilters))
		).pipe(map(this.filterRecipeList));
	}

	updatePagination(page: number) {
		this.filtersStore.dispatch(changeCurrentPage({ page }));
	}

	updateSeachKeyword(keyword: string) {
		this.filtersStore.dispatch(setKeywordFilter({ keyword }));
	}

	private filterRecipeList(pair: [Recipe[], RecipesFilterState]) {
		const [recipeList, filters] = pair;
		const { keyword = '', category, pageSize, currentPage } = filters;
		const recipes = recipeList
			.filter(p =>
				Object.keys(p).some(k =>
					p[k]
						.toString()
						.toLowerCase()
						.includes(keyword.toLowerCase())
				)
			)
			.filter(p => !category || p.category === category)
			.slice((currentPage - 1) * pageSize)
			.slice(0, pageSize);
		return recipes;
	}

}
