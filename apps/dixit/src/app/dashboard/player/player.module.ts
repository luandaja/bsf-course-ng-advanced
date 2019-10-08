import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { HandComponent } from './hand/hand.component';
import { UiCardModule } from '@glotrix/ui/card';
import { StoryEditorComponent } from './story-editor/story-editor.component';
import { UiFormsModule } from '@glotrix/ui/forms';
import { CardSelectorComponent } from './card-selector/card-selector.component';
import { UiSpinnerModule } from '@glotrix/ui/spinner';

@NgModule({
	declarations: [HandComponent, StoryEditorComponent, CardSelectorComponent],
	imports: [
		CommonModule,
		PlayerRoutingModule,
		UiFormsModule,
		UiSpinnerModule,
		UiCardModule
	]
})
export class PlayerModule { }
