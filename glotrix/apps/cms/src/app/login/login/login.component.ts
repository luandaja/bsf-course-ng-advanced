import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AuthState, signIn } from '../../core/store/auth';
import { FieldType } from '@glotrix/ui/forms';

@Component({
  selector: 'gt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  entries: FieldType[];

  constructor(private store: Store<AuthState>) {}

  ngOnInit() {
    this.entries = this.getEntrys();
  }

  onSubmitted(formData: any) {
    console.log('onSubmitted', formData);
    this.store.dispatch(signIn({ isLogged: true }));
  }

  getEntrys() {
    const entries: FieldType[] = [
      {
        controlType: 'textbox',
        value: '',
        key: 'username',
        label: 'Email',
        placeholder: 'user@example.com',
        order: 1,
        col: 'col-sm-12',

        validations: {
          pattern: {
            message: 'The email is not valid',
            value: '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
          },
          minlength: {
            message: 'Password must be at least three characters.',
            value: 3
          },
          required: {
            message: 'Password is required.',
            value: true
          }
        }
      },
      {
        controlType: 'password',
        value: '',
        key: 'password',
        label: 'Password',
        pattern: '',
        order: 2,
        col: 'col-sm-12',
        validations: {
          minlength: {
            message: 'Password must be at least three characters.',
            value: 3
          },
          required: {
            message: 'Password is required.',
            value: true
          }
        }
      }
    ];

    return entries.sort((a, b) => a.order - b.order);
  }
}
