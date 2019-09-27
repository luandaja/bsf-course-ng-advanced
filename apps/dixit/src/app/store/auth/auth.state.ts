import { Player } from '../../models';

export const authFeatureName = 'auth';
export interface AuthState {
	user: Player;
	isLogged: boolean;
}

export const initalState: AuthState = {
	isLogged: true,
	user: {
		playerId: 1,
		userName: 'ale',
		score: 0,
		order: 1,
		photoUrl: 'https://bit.ly/2ngbfJT'
	}
};
