import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { EntryBase } from './entries/entry-base';

@Injectable()
export class EntryControlService {
  constructor() { }

  toFormGroup(entries: EntryBase<any>[]) {
    const group: any = {};

    entries.forEach(entry => {
      group[entry.key] = entry.required
        ? new FormControl(entry.value || '', Validators.required)
        : new FormControl(entry.value || '');
    });
    return new FormGroup(group);
  }

  getValidationMessages(entries: EntryBase<any>[]): { [key: string]: { [key: string]: string } } {
    const validationMessages: { [key: string]: { [key: string]: string } } = {};
    entries.forEach(entry => {
      validationMessages[entry.key] = entry.validationMessages;
    });
    return validationMessages;
  }
}
