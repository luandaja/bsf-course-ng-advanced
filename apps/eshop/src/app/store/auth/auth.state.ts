import { User } from '../../models';


export const authFeatureName = 'auth';
export interface AuthState {
  user: User;
  isLogged: boolean;
}

export const initalState: AuthState = {
  isLogged: false,
  user: {
    firstName: 'Belatrix client',
    lastName: 'From Store',
    photoUrl: 'https://5.imimg.com/data5/XQ/KP/MY-40305254/kids-toy-500x500.jpg'
  }
};
