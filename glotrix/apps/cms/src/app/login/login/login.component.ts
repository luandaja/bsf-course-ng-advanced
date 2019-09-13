import { Component, OnInit } from '@angular/core';
import { EntryBase, TextboxEntry, PasswordEntry } from '@glotrix/ui/forms';
import { Store } from '@ngrx/store';
import { AuthState, signIn } from '../../core/store/auth';

@Component({
  selector: 'gt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  entries: EntryBase<any>[];

  constructor(private store: Store<AuthState>) { }

  ngOnInit() {
    this.entries = this.getEntrys();
  }

  onSubmitted(formData: any) {
    console.log("onSubmitted", formData);
    this.store.dispatch(signIn({ isLogged: "user" }));
  }

  getEntrys() {
    const entries: EntryBase<any>[] = [
      new TextboxEntry({
        key: 'username',
        label: 'Email',
        required: true,
        minlength: 3,
        order: 1,
        col: 'col-sm-12',
        validationMessages: {
          required: 'Email is required.',
          minlength: 'First name must be at least three characters.'
        }
      }),
      new PasswordEntry({
        key: 'password',
        label: 'Password',
        required: true,
        minlength: 3,
        order: 2,
        col: 'col-sm-12',
        validationMessages: {
          required: 'Password is required.',
          minlength: 'Password must be at least three characters.'
        }
      })
    ];

    return entries.sort((a, b) => a.order - b.order);
  }
}
