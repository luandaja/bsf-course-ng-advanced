import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { recipesOverviewReducer } from './recipes-overview.reducer';

@NgModule({
	imports: [CommonModule, StoreModule.forFeature('recipes-overview', recipesOverviewReducer)]
})
export class RecipesOverviewStoreModule { }
