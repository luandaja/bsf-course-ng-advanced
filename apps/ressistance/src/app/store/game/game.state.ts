import { Player, User, BoardStatus } from '../../models';
export const gameFeatureName = 'game';

export interface GameState {
	users: User[];
	userPlayer: User;
	isLogged: boolean;
	isLoading: boolean;
	isRestarting?: boolean;
	avatars: string[];
	board: BoardStatus,
	missionTeam: Player[];
}

const ale = { id: '2VS6a3CnoPvnpji1lzfH', order: 1, username: 'Ale', photoUrl: 'https://bit.ly/2ngbfJT', isSpy: false, isLeader: false };
const pao = { id: 'BAlXkteUzf33XR0bzdHH', order: 2, username: 'Pao', photoUrl: 'https://bit.ly/2mLcpgt', isSpy: true, isLeader: false };
const walter = { id: 'dgzHm76SRm9g2oxeSVO1', order: 3, username: 'Walter', photoUrl: 'https://bit.ly/2lQfYBH', isSpy: true, isLeader: false };
const myriam = { id: '4', order: 4, username: 'Myriam', photoUrl: 'https://bit.ly/2lOjrAQ', isSpy: false, isLeader: false };
const brenda = { id: '5', order: 5, username: 'Brenda', photoUrl: 'https://bit.ly/2leFz7h', isSpy: false, isLeader: false };
const vico = { id: '6', order: 6, username: 'Vico', photoUrl: 'https://bit.ly/2nmE0ov', isSpy: false, isLeader: false };

export const initalState: GameState = {
	users: [],// [pao, walter, myriam, brenda, vico, ale],
	userPlayer: { ...pao },
	isLogged: true,
	board: {
		cards: [],//[false, true, false],
		hasGameStarted: true,
		playerInTurn: null,
		shouldDragCards: false,
		wereSpiesRevealed: false
	},
	avatars: ['assets/users/ale.jpg', 'assets/users/vico.jpg', 'assets/users/myriam.jpg', 'assets/users/brenda.jpg', 'assets/users/pao.jpg', 'assets/users/walter.jpg', 'assets/users/user1.jpg', 'assets/users/user2.jpg', 'assets/users/user3.jpg', 'assets/users/user4.jpg'],
	isLoading: false,
	isRestarting: false,
	missionTeam: []
};


