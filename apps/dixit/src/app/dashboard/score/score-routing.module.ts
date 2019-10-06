import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScoreBoardComponent } from './score-board/score-board.component';


const routes: Routes = [
	{ path: '', component: ScoreBoardComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ScoreRoutingModule { }
