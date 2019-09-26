import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { gameReducer } from './game.reducer';

@NgModule({
	imports: [CommonModule, StoreModule.forFeature('game', gameReducer)]
})
export class GameStoreModule { }
