import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
//import { CardComponent } from './card/card.component';

@NgModule({
	imports: [CommonModule],
	declarations: [RecipeCardComponent],
	exports: [RecipeCardComponent]
})
export class UiCardModule { }
