import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { TableBoardComponent } from './table-board/table-board.component';
import { CardComponent } from './card/card.component';
import { GameStoreModule } from '../../store/game';


@NgModule({
	declarations: [TableBoardComponent, CardComponent],
	imports: [
		CommonModule,
		BoardRoutingModule,
		GameStoreModule
	]
})
export class BoardModule { }
