import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { CardComponent } from './card/card.component';
//import { CardComponent } from './card/card.component';

@NgModule({
	imports: [CommonModule],
	declarations: [CardComponent],
	exports: [CardComponent]
})
export class UiCardModule { }
