import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { FieldType } from '@glotrix/ui/forms';
import { map } from 'rxjs/operators';
import { storyFormFields } from './form-fields';
import { Player } from '../../../models';
import { Store } from '@ngrx/store';
import { GameState, setCurrentStory } from '../../../store/game';
import { StoryCard } from '../../../models/StoryCard';
import { SnackbarService } from '@glotrix/ui/snackbar';

@Component({
	selector: 'gt-story-editor',
	templateUrl: './story-editor.component.html',
	styleUrls: ['./story-editor.component.scss']
})
export class StoryEditorComponent implements OnChanges {

	entries = storyFormFields;
	@Input() cardIndex: number;
	@Input() userPlayer: Player;

	constructor(private gameStore: Store<GameState>,
		private snackbarService: SnackbarService) { }

	ngOnChanges() { }

	onSubmitted(formData: any) {
		if (!this.cardIndex) {
			this.snackbarService.showWarning("You have to select a card first!", 'Dixit');
			return;
		}
		const currentStory: StoryCard = { title: formData.title, storyTeller: this.userPlayer, cardIndex: this.cardIndex };
		this.gameStore.dispatch(setCurrentStory({ currentStory }));
	}

}
