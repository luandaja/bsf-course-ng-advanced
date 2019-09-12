import { User } from '../../../models';

export interface AuthState {
  user: User;
  islogged: boolean;
}

export const initalState: AuthState = {
  islogged: false,
  user: {
    firstName: 'Belatrix user',
    lastName: 'From Store'
  }
};
