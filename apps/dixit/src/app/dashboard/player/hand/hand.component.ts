import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GameState, getCurrentHand, getUserPlayer, getCurrentStory } from '../../../store/game';
import { Observable } from 'rxjs';
import { Player } from '../../../models';
import { StoryCard } from '../../../models/StoryCard';
import { BoardCard } from '../../../models/BoardCard';
import { map, switchMap } from 'rxjs/operators';

@Component({
	selector: 'gt-hand',
	templateUrl: './hand.component.html',
	styleUrls: ['./hand.component.scss']
})
export class HandComponent implements OnInit {
	handCards$: Observable<number[]>;
	isPlayersTurn$: Observable<boolean>;
	isStoryTellerTurn$: Observable<boolean>;
	userPlayer$: Observable<Player>;

	boardCard: BoardCard;
	selectedCardIndex: number;

	constructor(private gameStore: Store<GameState>) { }

	ngOnInit() {
		this.handCards$ = this.gameStore.pipe(select(getCurrentHand));
		this.userPlayer$ = this.gameStore.pipe(select(getUserPlayer));

		this.isStoryTellerTurn$ = this.gameStore.pipe(select(getCurrentStory),
			switchMap(story => this.userPlayer$.pipe(map(user => user.isStoryTeller && story === null)))
		);
		this.isPlayersTurn$ = this.gameStore.pipe(select(getCurrentStory),
			switchMap(story => this.userPlayer$.pipe(map(user => !user.isStoryTeller && story !== null && !user.hasThrowCard)))
		);
	}

	getCardImage(cardIndex: number): string {
		const card_index = cardIndex >= 10 ? cardIndex : `0${cardIndex}`;
		return `assets/cards/card_000${card_index}.jpg`;
	}

	selectCard(cardIndex: number) {
		this.selectedCardIndex = cardIndex;
	}

}
