import { Injectable } from '@angular/core';
import { Player } from '../../models';
import { Store, select } from '@ngrx/store';
import { GameState, getPlayers, getUserPlayer, getAvaiableCards, getScoreInput, getUserPlayerState, getNextPlayerId, getFirstPlayerId, getNextPlayer } from '../../store/game';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { PlayerFirebaseService } from './player.firebase.service';
import { StoryCard } from '../../models/StoryCard';
import { BoardCard } from '../../models/BoardCard';
import { LocalStorageService, StorageKey } from './local-storage.service';

@Injectable({
	providedIn: 'root'
})
export class PlayerService {

	constructor(private firestore: PlayerFirebaseService,
		private localStorage: LocalStorageService,
		private gameStore: Store<GameState>) {
	}

	collection$() {
		return this.firestore.collection$();
	}

	add(username: string, photoUrl: string) {
		return this.gameStore.select(getPlayers).pipe(
			take(1),
			map(players => players.length),
			switchMap(async (playersCount) => {
				const user = new Player(username, photoUrl, playersCount + 1);
				user.id = this.firestore.generateId();
				await this.firestore.create(user);
				return user;
			})
		);
	}

	getFirstPlayer() {
		return this.gameStore.select(getFirstPlayerId).pipe(take(1));
	}

	playerThrowCard() {
		return this.gameStore.select(getUserPlayer).pipe(
			take(1),
			switchMap(async userPlayer => {
				const player = { ...userPlayer, hasThrowCard: true };
				await this.firestore.update(player.id, player);
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

	getUserHand(cardsCount: number) {
		return this.gameStore.select(getAvaiableCards).pipe(take(1),
			map((info) => ({ cards: info.avaiableCards.slice(0, cardsCount), nextPlayerTurn: info.nextPlayerTurn }))
		);
	}

	getNextPlayerId() {
		return this.gameStore.pipe(select(getNextPlayerId), take(1));
	}

	setNextStoryTeller() {
		return this.gameStore.pipe(select(getNextPlayer), take(1), map(async player => {
			player.isStoryTeller = true;
			await this.firestore.update(player.id, player);
			return player;
		}));

	}


	updateScore() {
		return this.gameStore.pipe(select(getScoreInput),
			switchMap(async input => {
				{
					const { userPlayer, boardCards, currentStory, players } = input;
					const updatedPlayer = this.calculateScore({ ...userPlayer }, boardCards, currentStory, players);
					await this.firestore.update(updatedPlayer.id, updatedPlayer);
					return updatedPlayer;
				}
			}))
	}

	logout() {
		this.localStorage.clear();
	}

	recoverPlayerState() {
		return {
			currentHand: this.localStorage.get(StorageKey.currentHand) || [],
			userPlayer: this.localStorage.get(StorageKey.userPlayer) || null,
			isLogged: this.localStorage.get(StorageKey.isLogged) || false,
			isGuessingTime: this.localStorage.get(StorageKey.isGuessingTime) || false,
			isRoundFirst: this.localStorage.get(StorageKey.isRoundFirst) || true
		}
	}

	savePlayerState() {
		return this.gameStore.pipe(select(getUserPlayerState), take(1), map(userPlayerState => {
			this.localStorage.set(StorageKey.currentHand, userPlayerState.currentHand);
			this.localStorage.set(StorageKey.isRoundFirst, userPlayerState.isRoundFirst);
			this.localStorage.set(StorageKey.isGuessingTime, userPlayerState.isGuessingTime);
			this.localStorage.set(StorageKey.isLogged, userPlayerState.isLogged);
			this.localStorage.set(StorageKey.userPlayer, userPlayerState.userPlayer);
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
