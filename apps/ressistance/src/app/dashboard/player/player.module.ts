import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { HandComponent } from './hand/hand.component';
import { CardComponent } from './card/card.component';
import { UiSpinnerModule } from '@glotrix/ui/spinner';
import { UiAvatarModule } from '@glotrix/ui/avatar';


@NgModule({
	declarations: [HandComponent, CardComponent],
	imports: [
		CommonModule,
		PlayerRoutingModule,
		UiAvatarModule,
		UiSpinnerModule,
	]
})
export class PlayerModule { }
