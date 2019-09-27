import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { TableBoardComponent } from './table-board/table-board.component';

import { GameStoreModule } from '../../store/game';
import { UiAvatarModule } from '@glotrix/ui/avatar';
import { StoryComponent } from './story/story.component';
import { BoardCardsComponent } from './board-cards/board-cards.component';
import { CardComponent } from './card/card.component';

@NgModule({
	declarations: [TableBoardComponent, StoryComponent, BoardCardsComponent, CardComponent],
	imports: [
		CommonModule,
		BoardRoutingModule,
		GameStoreModule,
		UiAvatarModule
	]
})
export class BoardModule { }
