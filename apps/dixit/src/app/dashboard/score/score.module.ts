import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoreRoutingModule } from './score-routing.module';
import { ScoreBoardComponent } from './score-board/score-board.component';
import { UiAvatarModule } from '@glotrix/ui/avatar';


@NgModule({
	declarations: [ScoreBoardComponent],
	imports: [
		CommonModule,
		ScoreRoutingModule,
		UiAvatarModule
	]
})
export class ScoreModule { }
