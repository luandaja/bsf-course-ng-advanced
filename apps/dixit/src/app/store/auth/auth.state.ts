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
		photoUrl:
			'https://m.media-amazon.com/images/S/aplus-media/mg/dbf4301f-af40-46f2-9a87-a99deddcd9a2._SL300__.jpg'
	}
};
