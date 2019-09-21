import { User } from '../../models';

export const authFeatureName = 'auth';
export interface AuthState {
	user: User;
	isLogged: boolean;
}

export const initalState: AuthState = {
	isLogged: true,
	user: {
		firstName: 'player',
		lastName: 'From Store',
		userName: 'zoemy',
		photoUrl:
			'https://m.media-amazon.com/images/S/aplus-media/mg/dbf4301f-af40-46f2-9a87-a99deddcd9a2._SL300__.jpg'
	}
};
