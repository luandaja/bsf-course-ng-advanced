import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RecipeState } from './recipe.state';

const recipesFeature = createFeatureSelector<RecipeState>('recipe');

export const getRecipe = createSelector(
	recipesFeature,
	(state: RecipeState) => state.recipe
);

