import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { PlayersComponent } from './players/players.component';
import { StartGameComponent } from './start-game/start-game.component';
import { GameStoreModule } from '../../store/game';
import { UiAvatarModule } from '@glotrix/ui/avatar';
import { UiSpinnerModule } from '@glotrix/ui/spinner';
import { UiLoginModule } from '@glotrix/ui/login';
import { TableBoardComponent } from './table-board/table-board.component';
import { MissionComponent } from './mission/mission.component';
import { AssignmentVoteComponent } from './assignment-vote/assignment-vote.component';
import { MissionVoteComponent } from './mission-vote/mission-vote.component';


@NgModule({
	declarations: [PlayersComponent, StartGameComponent, TableBoardComponent, MissionComponent, AssignmentVoteComponent, MissionVoteComponent],
	imports: [
		CommonModule,
		BoardRoutingModule,
		GameStoreModule,
		UiAvatarModule,
		UiSpinnerModule,
		UiLoginModule
	]
})
export class BoardModule { }
