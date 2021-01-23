import { User } from '../../models';

export const authFeatureName = 'auth';
export interface AuthState {
	user: User;
	isLogged: boolean;
}

export const initalState: AuthState = {
	isLogged: true,
	user: {
		firstName: 'Tommy',
		lastName: 'Pickles',
		age: 30,
		heigth: 160,
		weight: 73,
		targetWeight: 60,
		birthday: '12/05/1989',
		photoUrl:
			'https://m.media-amazon.com/images/S/aplus-media/mg/dbf4301f-af40-46f2-9a87-a99deddcd9a2._SL300__.jpg'
	}
};
