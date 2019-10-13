import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { PlayersComponent } from './players/players.component';
import { StartGameComponent } from './start-game/start-game.component';
import { GameStoreModule } from '../../store/game';
import { UiAvatarModule } from '@glotrix/ui/avatar';
import { UiSpinnerModule } from '@glotrix/ui/spinner';
import { UiLoginModule } from '@glotrix/ui/login';


@NgModule({
	declarations: [PlayersComponent, StartGameComponent],
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
