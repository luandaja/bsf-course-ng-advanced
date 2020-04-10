import { User } from '../../models';

export const authFeatureName = 'auth';
export interface AuthState {
	user: User;
	isLogged: boolean;
}

export const initalState: AuthState = {
	isLogged: true,
	user: {
		firstName: 'Belatrix user',
		lastName: 'From Store',
		age: 30,
		heigth: 160,
		weight: 73,
		targetWeight: 60,
		photoUrl:
			'https://m.media-amazon.com/images/S/aplus-media/mg/dbf4301f-af40-46f2-9a87-a99deddcd9a2._SL300__.jpg'
	}
};
