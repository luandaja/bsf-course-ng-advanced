import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { recipeReducer } from './recipe.reducer';

@NgModule({
	imports: [CommonModule, StoreModule.forFeature('recipe', recipeReducer)]
})
export class RecipeStoreModule { }
