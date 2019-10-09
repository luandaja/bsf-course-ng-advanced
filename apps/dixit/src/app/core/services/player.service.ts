import { Injectable } from '@angular/core';
import { Player } from '../../models';
import { Store, select } from '@ngrx/store';
import { GameState, getPlayers, getUserPlayer, getHandInfo, getScoreInput, getUserPlayerState, getFirstPlayerId, getNextPlayer, getNextTurnInfo } from '../../store/game';
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
				const player = { ...userPlayer, hasVoted: true } as Player;
				await this.firestore.update(player.id, player);
				return player;
			})
		);
	}

	getUserHand() {
		return this.gameStore.pipe(take(1), select(getHandInfo));
	}

	getNextPlayerId() {
		return this.gameStore.pipe(select(getNextPlayer), take(1), map(player => player.id));
	}

	updateScore() {
		return this.gameStore.pipe(select(getScoreInput),
			take(1),
			switchMap(async input => {
				{
					const { userPlayer, boardCards, currentStory, players } = input;
					const updatedPlayer = this.calculateScore({ ...userPlayer }, boardCards, currentStory, players);
					await this.firestore.update(updatedPlayer.id, updatedPlayer);
					return updatedPlayer;
				}
			}))
	}

	setNextRound() {
		return this.gameStore.pipe(select(getNextTurnInfo),
			take(1),
			switchMap(async turnInfo => {
				await this.firestore.updateNextRounPlayer(turnInfo.userPlayerId, turnInfo.nextStoryTellerId);
				return turnInfo.firstPlayer;
			}));
	}


	logout() {
		this.localStorage.clear();
	}

	recoverPlayerState() {
		return {
			currentHand: this.localStorage.get(StorageKey.currentHand) || [],
			userPlayer: this.localStorage.get(StorageKey.userPlayer) || null,
			isGuessingTime: this.localStorage.get(StorageKey.isGuessingTime) || false,
			isRoundFirst: this.localStorage.get(StorageKey.isRoundFirst) || true
		}
	}

	savePlayerState() {
		return this.gameStore.pipe(select(getUserPlayerState), take(1), map(userPlayerState => {
			this.localStorage.set(StorageKey.currentHand, userPlayerState.currentHand);
			this.localStorage.set(StorageKey.isRoundFirst, userPlayerState.isRoundFirst);
			this.localStorage.set(StorageKey.isGuessingTime, userPlayerState.isGuessingTime);
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
