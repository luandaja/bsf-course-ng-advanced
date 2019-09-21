import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { deckReducer } from './deck.reducer';

@NgModule({
	imports: [CommonModule, StoreModule.forFeature('deck', deckReducer)]
})
export class DeckStoreModule { }
