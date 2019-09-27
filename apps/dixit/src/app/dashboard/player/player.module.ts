import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { HandComponent } from './hand/hand.component';
import { UiCardModule } from '@glotrix/ui/card';

@NgModule({
	declarations: [HandComponent],
	imports: [
		CommonModule,
		PlayerRoutingModule,
		UiCardModule
	]
})
export class PlayerModule { }
