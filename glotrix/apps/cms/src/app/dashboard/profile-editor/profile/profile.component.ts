import { Component, OnInit } from '@angular/core';
import { FieldType } from '@glotrix/ui/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthState, getUser, updateUser } from '../../../core/store/auth';
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
