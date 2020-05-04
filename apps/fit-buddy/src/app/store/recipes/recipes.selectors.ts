import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RecipesState } from './recipes.state';

const recipesFeature = createFeatureSelector<RecipesState>('recipes');

export const getRecipes = createSelector(
	recipesFeature,
	(state: RecipesState) => state.recipes
);
