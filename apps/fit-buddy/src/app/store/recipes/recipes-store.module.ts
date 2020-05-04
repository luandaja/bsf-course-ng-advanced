import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { recipesReducer } from './recipes.reducer';

@NgModule({
	imports: [CommonModule, StoreModule.forFeature('recipes', recipesReducer)]
})
export class RecipesStoreModule { }
