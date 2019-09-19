import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SocialNetwork, Banner } from '@glotrix/ui/login';
import { loginEntries } from './form-fields';
import { AuthState, signIn } from '../../store/auth';

export const banner: Banner = {
	upperText: 'BXCOMMERCE',
	title: 'Bienvenido',
	imageUrl:
		'https://st2.depositphotos.com/8535708/11759/v/950/depositphotos_117593278-stock-illustration-vector-illustration-of-store-building.jpg',
	contentText: 'Te esperábamos, sigamos trabajando para el crecimiento de tu negocio.'
};

@Component({
	selector: 'gt-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	entries = loginEntries;
	socialNetwork = SocialNetwork;
	banner = banner;

	constructor(private store: Store<AuthState>) {}

	onSubmitted(formData: any) {
		this.store.dispatch(
			signIn({ username: formData.Email, password: formData.password })
		);
	}

	onGooglePlusSignIn() {}
	onInstagramSignIn() {}
}
