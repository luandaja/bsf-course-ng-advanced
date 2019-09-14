import { Component, OnInit } from '@angular/core';
import { FieldType } from '@glotrix/ui/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthState, getUser, updateUser } from '../../../core/store/auth';
import { User } from '../../../models';

@Component({
  selector: 'gt-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  protected entries$: Observable<FieldType[]>;

  constructor(private store: Store<AuthState>) {}

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
    const entries: FieldType[] = [
      {
        controlType: 'textbox',
        key: 'firstName',
        value: user.firstName,
        label: 'First name',
        order: 1,
        col: 'col-sm-4',
        validations: {
          minlength: {
            message: 'First name must be at least three characters.',
            value: 3
          },
          required: {
            message: 'First name is required.',
            value: true
          },
          maxlength: {
            message: 'First name cannot exceed 30 characters.',
            value: 30
          }
        }
      },
      {
        controlType: 'textbox',
        key: 'lastName',
        value: user.lastName,
        label: 'Last name',
        order: 2,
        col: 'col-sm-4',
        validations: {
          minlength: {
            message: 'Last name must be at least three characters.',
            value: 3
          },
          required: {
            message: 'Last name is required.',
            value: true
          },
          maxlength: {
            message: 'Last name cannot exceed 30 characters.',
            value: 30
          }
        }
      },
      {
        controlType: 'textbox',
        key: 'facebook',
        value: user.facebook,
        label: 'Facebook',
        order: 3,
        col: 'col-sm-4',
        validations: {
          minlength: {
            message: 'Facebook must be at least three characters.',
            value: 3
          },
          required: {
            message: 'Facebook is required.',
            value: true
          },
          maxlength: {
            message: 'Facebook cannot exceed 30 characters.',
            value: 30
          }
        }
      },

      {
        controlType: 'textbox',
        key: 'twitter',
        value: user.twitter,
        label: 'Twitter',
        order: 4,
        col: 'col-sm-4',
        validations: {
          minlength: {
            message: 'Twitter must be at least three characters.',
            value: 3
          },
          required: {
            message: 'Twitter is required.',
            value: true
          },
          maxlength: {
            message: 'Twitter cannot exceed 30 characters.',
            value: 30
          }
        }
      },

      {
        controlType: 'textbox',
        key: 'instagram',
        value: user.instagram,
        label: 'Instagram',
        order: 5,
        col: 'col-sm-4',
        validations: {
          minlength: {
            message: 'Instagram must be at least three characters.',
            value: 3
          },
          required: {
            message: 'Instagram is required.',
            value: true
          },
          maxlength: {
            message: 'Instagram cannot exceed 30 characters.',
            value: 30
          }
        }
      },

      {
        controlType: 'textbox',
        key: 'website',
        value: user.website,
        label: 'Website',
        order: 6,
        col: 'col-sm-4',
        validations: {
          minlength: {
            message: 'Website must be at least three characters.',
            value: 3
          },
          required: {
            message: 'Website is required.',
            value: true
          },
          maxlength: {
            message: 'Website cannot exceed 30 characters.',
            value: 30
          }
        }
      },

      {
        controlType: 'textblock',
        key: 'description',
        value: user.description,
        label: 'Description',
        order: 7,
        col: 'col-sm-4',
        validations: {
          minlength: {
            message: 'Description must be at least three characters.',
            value: 3
          },
          required: {
            message: 'Description is required.',
            value: true
          },
          maxlength: {
            message: 'Description cannot exceed 30 characters.',
            value: 30
          }
        }
      }
    ];

    return entries.sort((a, b) => a.order - b.order);
  }
}
