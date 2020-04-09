import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoreRoutingModule } from './score-routing.module';
import { ScoreBoardComponent } from './score-board/score-board.component';
import { UiAvatarModule } from '@glotrix/ui/avatar';
import { UiPosterCardModule } from '@glotrix/ui/poster-card';
import { UiSpinnerModule } from '@glotrix/ui/spinner';

@NgModule({
	declarations: [ScoreBoardComponent],
	imports: [
		CommonModule,
		ScoreRoutingModule,
		UiAvatarModule,
		UiPosterCardModule,
		UiSpinnerModule
	]
})
export class ScoreModule { }
