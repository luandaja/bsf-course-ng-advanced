import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BoardCard } from '../../../models/BoardCard';
import { select, Store } from '@ngrx/store';
import { getBoardCards, getIsGuessingTime, getVotesVisibility, GameState, getCurrentStory, setVote, getUserPlayer } from '../../../store/game';
import { StoryCard } from '../../../models/StoryCard';
import { map, tap, switchMap } from 'rxjs/operators';
import { Player } from '../../../models';

@Component({
	selector: 'gt-board-cards',
	templateUrl: './board-cards.component.html',
	styleUrls: ['./board-cards.component.scss']
})
export class BoardCardsComponent implements OnInit {
	boardCards$: Observable<BoardCard[]>;
	isGuessingTime$: Observable<boolean>;
	storyCard$: Observable<StoryCard>;
	userPlayer$: Observable<Player>;

	//selectedCard$: Observable<BoardCard>;
	selectedCard: BoardCard;
	canVote = true;

	constructor(private gameStore: Store<GameState>) { }

	ngOnInit() {
		this.boardCards$ = this.gameStore.pipe(select(getBoardCards));
		this.isGuessingTime$ = this.gameStore.pipe(select(getIsGuessingTime));
		this.storyCard$ = this.gameStore.pipe(select(getCurrentStory));
		this.userPlayer$ = this.gameStore.pipe(select(getUserPlayer));
	}

	vote(): void {
		// this.authStore.pipe(
		// 	select(getUser),
		// 	map(user => {
		// 		console.log("voted");
		// 		this.canVote = false;
		// 		console.log("canVote", this.canVote);
		// 		this.selectedCard.votes.push(user);
		// 		this.gameStore.dispatch(setVote({ boardCard: this.selectedCard }));
		// 	})
		// );

		//story.storyTeller.playerId === user.playerId
		this.userPlayer$
			.subscribe(user => {
				if (user.isStoryTeller) {
					console.log("You are the story teller so you can't vote!");
					return;
				}
				if (this.selectedCard.owner.playerId === user.playerId) {
					console.log("You can't vote for your own card!");
					return;
				}
				this.canVote = false;
				this.gameStore.dispatch(setVote({ cardIndex: this.selectedCard.cardIndex, player: user }));
			});
	}


	selectCard(cardSelected: BoardCard) {
		//	if()
		if (!this.canVote)
			return;

		this.selectedCard = cardSelected;
		// this.areVotesVisible$  // should retain last value (e.g. use BehaviorSubject)
		// 	.subscribe(
		// 		(areVotesVisible) => {
		// 			if (!areVotesVisible) {
		// 				this.selectedCard = cardSelected;
		// 			}
		// 		});
	}

}
