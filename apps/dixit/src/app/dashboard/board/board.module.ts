import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { TableBoardComponent } from './table-board/table-board.component';

import { GameStoreModule } from '../../store/game';
import { UiAvatarModule } from '@glotrix/ui/avatar';
import { StoryComponent } from './story/story.component';
import { BoardCardsComponent } from './board-cards/board-cards.component';
import { CardComponent } from './card/card.component';
import { BoardCardComponent } from './board-card/board-card.component';
import { PlayersComponent } from './players/players.component';

@NgModule({
	declarations: [TableBoardComponent, StoryComponent, BoardCardsComponent, CardComponent, BoardCardComponent, PlayersComponent],
	imports: [
		CommonModule,
		BoardRoutingModule,
		GameStoreModule,
		UiAvatarModule
	]
})
export class BoardModule { }
