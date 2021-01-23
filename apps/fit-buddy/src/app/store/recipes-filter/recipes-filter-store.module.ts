import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { recipesFilterReducer } from './recipes-filter.reducer';

@NgModule({
	imports: [
		CommonModule,
		StoreModule.forFeature('recipesFilter', recipesFilterReducer)
	]
})
export class RecipesFilterStoreModule { }
