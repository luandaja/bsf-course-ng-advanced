import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartGameComponent } from './start-game/start-game.component';


const routes: Routes = [
	{
		path: 'start',
		component: StartGameComponent
	},
	// {
	// 	path: '',
	// 	component: TableBoardComponent,
	// 	// canLoad: [GameGuard],
	// 	// canActivate: [GameGuard]
	// }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class BoardRoutingModule { }
