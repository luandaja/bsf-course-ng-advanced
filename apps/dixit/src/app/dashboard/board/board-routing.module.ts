import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartGameComponent } from './start-game/start-game.component';
import { TableBoardComponent } from './table-board/table-board.component';
import { GameGuard } from '../../core/services/game.guard';

const routes: Routes = [
	{
		path: 'start',
		component: StartGameComponent
	},
	{
		path: '',
		component: TableBoardComponent,
		canLoad: [GameGuard]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class BoardRoutingModule { }
