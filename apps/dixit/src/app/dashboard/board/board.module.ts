
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { TableBoardComponent } from './table-board/table-board.component';

import { GameStoreModule } from '../../store/game';
import { UiAvatarModule } from '@glotrix/ui/avatar';
import { UiQuoteModule } from '@glotrix/ui/quote';
import { StoryComponent } from './story/story.component';
import { BoardCardsComponent } from './board-cards/board-cards.component';
import { CardComponent } from './card/card.component';
import { BoardCardComponent } from './board-card/board-card.component';
import { PlayersComponent } from './players/players.component';
import { VoteEditorComponent } from './vote-editor/vote-editor.component';
import { StartGameComponent } from './start-game/start-game.component';
import { CoreModule } from '../../core/core.module';
import { UiSpinnerModule } from '@glotrix/ui/spinner';

@NgModule({
	declarations: [TableBoardComponent, StoryComponent, BoardCardsComponent, CardComponent, BoardCardComponent, PlayersComponent, VoteEditorComponent, StartGameComponent],
	imports: [
		CommonModule,
		BoardRoutingModule,
		//	CoreModule,
		GameStoreModule,
		UiAvatarModule,
		UiSpinnerModule,
		UiQuoteModule
	]
})
export class BoardModule { }
