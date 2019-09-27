import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BoardCard } from '../../../models/BoardCard';
import { select, Store } from '@ngrx/store';
import { getBoardCards, getIsGuessingTime, getVotesVisibility, GameState, getCurrentStory, setVote } from '../../../store/game';
import { StoryCard } from '../../../models/StoryCard';
import { map, tap, switchMap } from 'rxjs/operators';
import { AuthState, getUser } from '../../../store/auth';

@Component({
	selector: 'gt-board-cards',
	templateUrl: './board-cards.component.html',
	styleUrls: ['./board-cards.component.scss']
})
export class BoardCardsComponent implements OnInit {
	boardCards$: Observable<BoardCard[]>;
	isGuessingTime$: Observable<boolean>;
	storyCardIndex$: Observable<number>;

	//selectedCard$: Observable<BoardCard>;
	selectedCard: BoardCard;
	canVote = true;

	constructor(private gameStore: Store<GameState>,
		private authStore: Store<AuthState>) { }

	ngOnInit() {
		this.boardCards$ = this.gameStore.pipe(select(getBoardCards));
		this.isGuessingTime$ = this.gameStore.pipe(select(getIsGuessingTime));
		this.storyCardIndex$ = this.gameStore.pipe(select(getCurrentStory), map(story => story.storyCardIndex));
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
		this.authStore.pipe(select(getUser))
			.subscribe(user => {
				if (this.selectedCard.owner.playerId === user.playerId) {
					console.log("You can't vote for your own card!");
					return;
				}
				this.canVote = false;
				this.gameStore.dispatch(setVote({ cardIndex: this.selectedCard.cardIndex, player: user }));
			});
	}


	selectCard(cardSelected: BoardCard) {
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
