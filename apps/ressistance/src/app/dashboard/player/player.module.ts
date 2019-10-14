import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { HandComponent } from './hand/hand.component';
import { CardComponent } from './card/card.component';
import { UiSpinnerModule } from '@glotrix/ui/spinner';
import { UiAvatarModule } from '@glotrix/ui/avatar';
import { ViewSpiesComponent } from './view-spies/view-spies.component';
import { SelectTeamComponent } from './select-team/select-team.component';


@NgModule({
	declarations: [HandComponent, CardComponent, ViewSpiesComponent, SelectTeamComponent],
	imports: [
		CommonModule,
		PlayerRoutingModule,
		UiAvatarModule,
		UiSpinnerModule,
	]
})
export class PlayerModule { }
