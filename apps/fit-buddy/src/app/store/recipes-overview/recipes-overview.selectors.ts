import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RecipesOverviewState } from './recipes-overview.state';

const recipesFeature = createFeatureSelector<RecipesOverviewState>('recipes-overview');

export const getRecipes = createSelector(
	recipesFeature,
	(state: RecipesOverviewState) => state.recipes
);

export const getRecipesTotal = createSelector(
	recipesFeature,
	(state: RecipesOverviewState) => state.recipes.length
);
