import { Component, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { storyFormFields } from './form-fields';
import { Player } from '../../../models';
import { Store, select } from '@ngrx/store';
import { GameState, setCurrentStory, getIsStoryTellerTurn } from '../../../store/game';
import { StoryCard } from '../../../models/StoryCard';
import { SnackbarService } from '@glotrix/ui/snackbar';

@Component({
	selector: 'gt-story-editor',
	templateUrl: './story-editor.component.html',
	styleUrls: ['./story-editor.component.scss']
})
export class StoryEditorComponent implements OnChanges {
	isStoryTellerTurn$: Observable<boolean>;

	entries = storyFormFields;
	@Input() cardIndex: number;
	@Input() userPlayer: Player;

	constructor(private gameStore: Store<GameState>,
		private snackbarService: SnackbarService) { }

	ngOnChanges() {
		this.isStoryTellerTurn$ = this.gameStore.pipe(select(getIsStoryTellerTurn));
	}

	onSubmitted(formData: any) {
		if (!this.cardIndex) {
			this.snackbarService.showWarning("You have to select a card first!", 'Dixit');
			return;
		}
		const currentStory: StoryCard = { title: formData.title, storyTeller: this.userPlayer, cardIndex: this.cardIndex };
		this.gameStore.dispatch(setCurrentStory({ currentStory }));
	}

}
