import { TextboxEntry, EntryBase, TextblockEntry } from '@glotrix/ui/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gt-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  entries: EntryBase<any>[];

  constructor() { }

  ngOnInit() {
    this.entries = this.getEntrys();
  }

  getEntrys() {
    const entries: EntryBase<any>[] = [
      new TextboxEntry({
        key: 'firstName',
        label: 'First name',
        required: true,
        minlength: 3,
        order: 1,
        col: 'col-sm-4',
        validationMessages: {
          required: 'First name is required.',
          minlength: 'First name must be at least three characters.',
          maxlength: 'First name cannot exceed 30 characters.'
        }
      }),
      new TextboxEntry({
        key: 'lastName',
        label: 'Last name',
        required: true,
        minlength: 3,
        order: 2,
        col: 'col-sm-4',
        validationMessages: {
          required: 'Last name is required.',
          minlength: 'Last name must be at least three characters.',
          maxlength: 'Last name cannot exceed 30 characters.'
        }
      }),
      new TextboxEntry({
        key: 'facebook',
        label: 'Facebook',
        required: true,
        minlength: 2,
        order: 3,
        col: 'col-sm-4',
        validationMessages: {
          required: 'Facebook is required.',
          minlength: 'Facebook must be at least three characters.',
          maxlength: 'Facebook cannot exceed 30 characters.'
        }
      }),
      new TextboxEntry({
        key: 'twitter',
        label: 'Twitter',
        required: true,
        minlength: 2,
        order: 4,
        col: 'col-sm-4',
        validationMessages: {
          required: 'Twitter is required.',
          minlength: 'Twitter must be at least three characters.',
          maxlength: 'Twitter cannot exceed 30 characters.'
        }
      }),
      new TextboxEntry({
        key: 'instagram',
        label: 'Instagram',
        minlength: 3,
        order: 5,
        col: 'col-sm-4',
        validationMessages: {
          minlength: 'Instagram must be at least three characters.',
          maxlength: 'Instagram cannot exceed 30 characters.'
        }
      }),

      new TextboxEntry({
        key: 'website',
        label: 'Website',
        order: 6,
        col: 'col-sm-4',
        validationMessages: {
          minlength: 'Email must be at least three characters.',
          maxlength: 'Email exceed 30 characters.'
        }
      }),
      new TextblockEntry({
        key: 'description',
        label: 'Description',
        order: 6,
        col: 'col-sm-12',
        validationMessages: {
          minlength: 'Email must be at least three characters.',
          maxlength: 'Email exceed 30 characters.'
        }
      })
    ];

    return entries.sort((a, b) => a.order - b.order);
  }
}
