import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSpinnerModule } from '@glotrix/ui/spinner';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes/recipes.component';
import { UiCardModule } from '@glotrix/ui/card';
import { UiSearchBarModule } from '@glotrix/ui/search-bar';
import { RecipesStoreModule } from '../../store/recipes';
@NgModule({
	declarations: [RecipesComponent],
	imports: [
		CommonModule,
		RecipesRoutingModule,
		UiCardModule,
		UiSearchBarModule,
		UiSpinnerModule,
		RecipesStoreModule
	]
})
export class RecipesModule { }
