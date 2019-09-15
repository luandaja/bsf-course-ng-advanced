import { User } from '../../../models';

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
    description: 'default user form store',
    facebook: 'facebook',
    instagram: 'instagram',
    twitter: 'twitter',
    website: 'website'
  }
};
