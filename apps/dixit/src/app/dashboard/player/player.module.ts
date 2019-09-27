import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { HandComponent } from './hand/hand.component';
import { UiCardModule } from '@glotrix/ui/card';
import { StoryEditorComponent } from './story-editor/story-editor.component';
import { UiFormsModule } from '@glotrix/ui/forms';

@NgModule({
	declarations: [HandComponent, StoryEditorComponent],
	imports: [
		CommonModule,
		UiFormsModule,
		PlayerRoutingModule,
		UiCardModule
	]
})
export class PlayerModule { }
