import { Injectable } from '@angular/core';
import { Player } from '../../models';
import { Store, select } from '@ngrx/store';
import { GameState, getPlayers, getUserPlayer, getBoardCards, getCurrentStory, getAvaiableCards } from '../../store/game';
import { map, exhaustMap } from 'rxjs/operators';
import { PlayerFirebaseService } from './player.firebase.service';
import { StoryCard } from '../../models/StoryCard';
import { BoardCard } from '../../models/BoardCard';
import { combineLatest } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PlayerService {

	constructor(private firestore: PlayerFirebaseService,
		private gameStore: Store<GameState>) {
	}

	collection$() {
		return this.firestore.collection$();
	}

	add(username: string, photoUrl: string) {
		return this.gameStore.select(getPlayers).pipe(
			map((players => players.length)),
			exhaustMap(playersCount => {
				const user = new Player(username, photoUrl, playersCount + 1);
				return this.firestore.create(user).pipe(map(_ => user));
			})
		);
	}

	playerThrowCard() {
		return this.gameStore.select(getUserPlayer).pipe(
			exhaustMap(userPlayer => {
				userPlayer.hasThrowCard = true;
				return this.firestore.update(userPlayer.id.toString(), userPlayer).pipe(map(_ => userPlayer));
			})
		);
	}

	playerVote() {
		return this.gameStore.select(getUserPlayer).pipe(
			exhaustMap(userPlayer => {
				userPlayer.hasVoted = true;
				return this.firestore.update(userPlayer.id.toString(), userPlayer).pipe(map(_ => userPlayer));
			})
		);
	}

	getNextTurn() {
		return this.gameStore.select(getUserPlayer).pipe(
			map(userPlayer => userPlayer === null ? 0 : userPlayer.id + 1)
		);
	}

	getUserHand(cardsCount: number) {
		return this.gameStore.pipe(select(getAvaiableCards),
			map(cards => cards.slice(0, cardsCount)))
	}

	updateScore() {
		return combineLatest(
			this.gameStore.pipe(select(getUserPlayer)),
			this.gameStore.pipe(select(getBoardCards)),
			this.gameStore.pipe(select(getCurrentStory)),
			this.gameStore.pipe(select(getPlayers))
		).pipe(map(this.calculateScore));
	}

	private calculateScore(pair: [Player, BoardCard[], StoryCard, Player[]]) {
		const [userPlayer, boardCards, currentStory, players] = pair;
		const correctCard = boardCards.find(boardCard => boardCard.cardIndex === currentStory.cardIndex);
		const correctVotesCount = correctCard.votes.length;

		const somePlayersGuessed = correctVotesCount !== players.length - 1 && correctVotesCount !== 0;
		const hasPlayerGuessed = correctCard.votes.find(player => player.id === userPlayer.id) !== undefined;

		userPlayer.score = somePlayersGuessed ? (hasPlayerGuessed ? 2 : 0) : (!userPlayer.isStoryTeller ? 2 : 0);

		if (!userPlayer.isStoryTeller) {
			const playerCard = boardCards.find(boardCard => boardCard.owner.id === userPlayer.id)
			userPlayer.score += playerCard.votes.length;
		}

		userPlayer.hasThrowCard = false;
		userPlayer.hasVoted = false;

		return userPlayer;
	}

}
