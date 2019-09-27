import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GameState, getCurrentHand, getUserPlayer, getCurrentStory, setBoardCard } from '../../../store/game';
import { Observable } from 'rxjs';
import { Player } from '../../../models';
import { StoryCard } from '../../../models/StoryCard';
import { BoardCard } from '../../../models/BoardCard';
import { map } from 'rxjs/operators';

@Component({
	selector: 'gt-hand',
	templateUrl: './hand.component.html',
	styleUrls: ['./hand.component.scss']
})
export class HandComponent implements OnInit {
	handCards$: Observable<number[]>;
	storyCard$: Observable<StoryCard>;
	userPlayer$: Observable<Player>;

	boardCard: BoardCard;
	selectedCardIndex: number;


	constructor(private gameStore: Store<GameState>) { }

	ngOnInit() {
		this.handCards$ = this.gameStore.pipe(select(getCurrentHand));
		this.storyCard$ = this.gameStore.pipe(select(getCurrentStory));
		this.userPlayer$ = this.gameStore.pipe(select(getUserPlayer));
	}

	getCardImage(cardIndex: number): string {
		const card_index = cardIndex >= 10 ? cardIndex : `0${cardIndex}`;
		return `assets/cards/card_000${card_index}.jpg`;
	}

	selectCard(cardIndex: number) {
		this.selectedCardIndex = cardIndex;
	}

	throwCard(userPlayer: Player) {
		if (!this.selectedCardIndex) {
			console.log("Yo have to select a card first!");
			return;
		}
		const boardCard: BoardCard = { cardIndex: this.selectedCardIndex, owner: userPlayer, votes: [] };
		this.gameStore.dispatch(setBoardCard({ boardCard }));
	}



}
