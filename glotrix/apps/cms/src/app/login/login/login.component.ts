import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState, signIn } from '../../core/store/auth';
import { SocialNetwork } from '@glotrix/ui/login';
import { loginEntries, banner } from './entries';

@Component({
  selector: 'gt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  entries = loginEntries;
  socialNetwork = SocialNetwork;
  banner = banner;

  constructor(private store: Store<AuthState>) { }

  onSubmitted(formData: any) {
    this.store.dispatch(
      signIn({ username: formData.Email, password: formData.password })
    );
  }

  onGooglePlusSignIn() { }

  onInstagramSignIn() { }


}
