import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { FieldType } from '../models/Field';

@Injectable()
export class EntryControlService {
  constructor() {}

  toFormGroup(entries: FieldType[]) {
    const group: any = {};

    entries.forEach(entry => {
      const validators = this.getValidators(entry);
      group[entry.key] =
        validators.length > 0
          ? new FormControl(entry.value || '', validators)
          : new FormControl(entry.value || '');
    });
    return new FormGroup(group);
  }

  getValidationMessages(
    entries: FieldType[]
  ): { [key: string]: { [key: string]: string } } {
    const validationMessages: { [key: string]: { [key: string]: string } } = {};
    entries.forEach(entry => {
      if (entry.validations && entry.validations[entry.key])
        validationMessages[entry.key] = entry.validations[entry.key].message;
    });
    return validationMessages;
  }

  private getValidators(entry: FieldType): ValidatorFn[] {
    let validators: ValidatorFn[] = [];
    validators = validators.concat(this.getBaseValidators(entry));
    // validators = validators.concat(this.getTextBoxValidators(entry as TextboxField));
    // validators = validators.concat(this.getTexBlockValidators(entry as TextblockEntry));
    // validators = validators.concat(this.getPasswordBoxValidators(entry as PasswordEntry));
    return validators;
  }

  private getBaseValidators(entry: FieldType): ValidatorFn[] {
    const validators: ValidatorFn[] = [];
    if (!entry.validations) return validators;
    if (entry.validations.required) validators.push(Validators.required);
    if (entry.validations.maxlength)
      validators.push(Validators.maxLength(entry.validations.maxlength.value));
    if (entry.validations.minlength)
      validators.push(Validators.minLength(entry.validations.minlength.value));
    if (entry.validations.pattern)
      validators.push(Validators.pattern(entry.validations.pattern.value));
    return validators;
  }

  // private getTextBoxValidators(entry: FieldType): ValidatorFn[] {
  //   const validators: ValidatorFn[] = [];
  //   if (entry.minlength != null) validators.push(Validators.minlength(entry.minlength));
  //   if (entry.pattern != null) validators.push(Validators.pattern(entry.pattern));
  //   return validators;
  // }

  // private getPasswordBoxValidators(entry: FieldType): ValidatorFn[] {
  //   const validators: ValidatorFn[] = [];
  //   if (entry.minlength != null) validators.push(Validators.minlength(entry.minlength));
  //   return validators;
  // }

  // private getTexBlockValidators(entry: FieldType): ValidatorFn[] {
  //   const validators: ValidatorFn[] = [];
  //   if (entry.minlength != null) validators.push(Validators.minlength(entry.minlength));
  //   return validators;
  // }
}
