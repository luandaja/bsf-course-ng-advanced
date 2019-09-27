import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { TableBoardComponent } from './table-board/table-board.component';

import { GameStoreModule } from '../../store/game';
import { UiCardModule } from '@glotrix/ui/card';
import { UiAvatarModule } from '@glotrix/ui/avatar';
import { StoryComponent } from './story/story.component';
import { BoardCardsComponent } from './board-cards/board-cards.component';

@NgModule({
	declarations: [TableBoardComponent, StoryComponent, BoardCardsComponent],
	imports: [
		CommonModule,
		BoardRoutingModule,
		GameStoreModule,
		UiCardModule,
		UiAvatarModule
	]
})
export class BoardModule { }
