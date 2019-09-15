import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FieldType } from '@glotrix/ui/forms';
import { Store, select } from '@ngrx/store';
import { AuthState, getUser, updateUser } from '../../../core/store/auth';
import { take, map } from 'rxjs/operators';
import { User } from '../../../models';
import { entries } from './entries';

@Component({
  selector: 'gt-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  protected entries$: Observable<FieldType[]>;
  protected photoUrl: string;

  constructor(private store: Store<AuthState>) { }

  ngOnInit() {
    this.entries$ = this.store.pipe(
      select(getUser),
      take(1),
      map(this.getEntrys)
    );
  }

  onSubmitted(user: User) {
    this.store.dispatch(updateUser({ user: user }));
  }

  getEntrys(user: User): FieldType[] {
    this.photoUrl = user.photoUrl;
    return entries.map(entry => {
      entry.value = user[entry.key];
      return entry;
    })
  }
}
