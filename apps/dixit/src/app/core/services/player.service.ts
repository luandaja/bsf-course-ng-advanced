import { Injectable } from '@angular/core';
import { Player } from '../../models';
import { Store, select } from '@ngrx/store';
import { GameState, getPlayers, getUserPlayer, getBoardCards, getCurrentStory, getAvaiableCards, getScoreInput } from '../../store/game';
import { map, exhaustMap, switchMap, tap, switchMapTo, take } from 'rxjs/operators';
import { PlayerFirebaseService } from './player.firebase.service';
import { StoryCard } from '../../models/StoryCard';
import { BoardCard } from '../../models/BoardCard';
import { combineLatest, of } from 'rxjs';

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

	create(value: any) {
		return this.firestore.create(value);
	}

	add(username: string, photoUrl: string) {
		return this.gameStore.select(getPlayers).pipe(
			take(1),
			map(players => players.length),
			switchMap(async (playersCount) => {
				const user = new Player(username, photoUrl, playersCount + 1);
				await this.firestore.create(user);
				return user;
			})
		);
	}

	playerThrowCard() {
		return this.gameStore.select(getUserPlayer).pipe(
			take(1),
			switchMap(async userPlayer => {
				const player = { ...userPlayer, hasThrowCard: true };
				await this.firestore.update(player.id.toString(), player);
				return player;
			})
		);
	}

	playerVote() {
		return this.gameStore.select(getUserPlayer).pipe(
			take(1),
			switchMap(async userPlayer => {
				const player = { ...userPlayer, hasVoted: true };
				await this.firestore.update(player.id.toString(), player);
				return player;
			})
		);
	}

	// getNextTurn() {
	// 	return this.gameStore.select(getUserPlayer).pipe(
	// 		map(userPlayer => userPlayer === null ? 0 : userPlayer.id + 1)
	// 	);
	// }
	//{ cards: info.avaiableCards.slice(0, cardsCount), currentTurn: info.currentTurn }
	getUserHand(cardsCount: number) {
		return this.gameStore.select(getAvaiableCards).pipe(take(1),
			map((info) => ({ cards: info.avaiableCards.slice(0, cardsCount), currentTurn: info.currentTurn }))
		);

		// return this.gameStore.select(getAvaiableCards),
		// 	switchMap());
	}

	updateScore() {
		console.log("update score");
		return this.gameStore.pipe(select(getScoreInput),
			switchMap(async input => {
				{
					const { userPlayer, boardCards, currentStory, players } = input;
					const updatedPlayer = this.calculateScore({ ...userPlayer }, boardCards, currentStory, players);
					await this.firestore.update(updatedPlayer.id.toString(), updatedPlayer);
					return updatedPlayer;
				}
			}))
	}

	private calculateScore(userPlayer: Player, boardCards: BoardCard[], currentStory: StoryCard, players: Player[]) {
		const correctCard = boardCards.find(boardCard => boardCard.cardIndex === currentStory.cardIndex);
		const correctVotesCount = correctCard.votes.length;

		const somePlayersGuessed = correctVotesCount !== players.length - 1 && correctVotesCount !== 0;
		const hasPlayerGuessed = correctCard.votes.find(player => player.id === userPlayer.id) !== undefined;

		if (userPlayer.isStoryTeller) {
			userPlayer.score += somePlayersGuessed ? 2 : 0;
		} else {
			userPlayer.score += somePlayersGuessed ? (hasPlayerGuessed ? 2 : 0) : 2;
		}

		if (!userPlayer.isStoryTeller) {
			const playerCard = boardCards.find(boardCard => boardCard.owner.id === userPlayer.id)
			userPlayer.score += playerCard.votes.length;
		}

		userPlayer.hasThrowCard = false;
		userPlayer.hasVoted = false;

		return userPlayer;
	}

}
