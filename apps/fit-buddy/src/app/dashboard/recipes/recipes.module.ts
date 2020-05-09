import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSpinnerModule } from '@glotrix/ui/spinner';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes/recipes.component';
import { UiSearchBarModule } from '@glotrix/ui/search-bar';
import { UiTablesModule } from '@glotrix/ui/tables';
import { UiCarouselModule } from '@glotrix/ui/carousel';
import { RecipesOverviewStoreModule } from '../../store/recipes-overview';
import { RecipesFilterStoreModule } from '../../store/recipes-filter';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipeStoreModule } from '../../store/recipe';
import { RecipeContentComponent } from './recipe-content/recipe-content.component';
@NgModule({
	declarations: [RecipesComponent, RecipesDetailComponent, RecipeCardComponent, RecipeContentComponent],
	imports: [
		CommonModule,
		RecipesRoutingModule,
		UiSearchBarModule,
		UiTablesModule,
		UiSpinnerModule,
		UiCarouselModule,
		RecipesOverviewStoreModule,
		RecipesFilterStoreModule,
		RecipeStoreModule
	]
})
export class RecipesModule { }
