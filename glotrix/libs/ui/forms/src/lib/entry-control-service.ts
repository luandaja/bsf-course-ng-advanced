import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';

import { EntryBase, TextboxEntry, TextblockEntry, PasswordEntry } from './entries';


@Injectable()
export class EntryControlService {
  constructor() { }

  toFormGroup(entries: EntryBase<any>[]) {
    const group: any = {};

    entries.forEach(entry => {
      const validators = this.getValidators(entry);
      group[entry.key] = validators.length > 0 ? new FormControl(entry.value || '', validators)
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

  private getValidators(entry: EntryBase<any>): ValidatorFn[] {
    let validators: ValidatorFn[] = [];
    validators = validators.concat(this.getBaseValidators(entry));
    validators = validators.concat(this.getTextBoxValidators(entry as TextboxEntry));
    validators = validators.concat(this.getTexBlockValidators(entry as TextblockEntry));
    validators = validators.concat(this.getPasswordBoxValidators(entry as PasswordEntry));
    return validators;
  }

  private getBaseValidators(entry: EntryBase<any>): ValidatorFn[] {
    const validators: ValidatorFn[] = [];
    if (entry.required)
      validators.push(Validators.required);
    if (entry.maxlength != null)
      validators.push(Validators.maxLength(entry.maxlength));
    return validators;
  }

  private getTextBoxValidators(entry: TextboxEntry): ValidatorFn[] {
    const validators: ValidatorFn[] = [];
    if (entry.minlength != null)
      validators.push(Validators.minLength(entry.minlength));
    if (entry.pattern != null)
      validators.push(Validators.pattern(entry.pattern));
    return validators;
  }

  private getPasswordBoxValidators(entry: PasswordEntry): ValidatorFn[] {
    const validators: ValidatorFn[] = [];
    if (entry.minlength != null)
      validators.push(Validators.minLength(entry.minlength));
    return validators;
  }

  private getTexBlockValidators(entry: TextblockEntry): ValidatorFn[] {
    const validators: ValidatorFn[] = [];
    if (entry.minlength != null)
      validators.push(Validators.minLength(entry.minlength));
    return validators;
  }

}
