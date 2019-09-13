import { User } from '../../../models';

export interface AuthState {
  user: User;
  islogged: boolean;
}

export const initalState: AuthState = {
  islogged: false,
  user: {
    firstName: 'Belatrix user',
    lastName: 'From Store',
    description: 'default user form store',
    facebook: 'facebook',
    instagram: 'instagram',
    twitter: 'twitter',
    website: 'website'
  }
};
