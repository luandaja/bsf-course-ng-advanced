import { EntryBase } from './entry-base';

export class PasswordEntry extends EntryBase<string> {
  controlType = 'password';
  minLength: number;
  maxLength: number;

  constructor(options: {} = {}) {
    super(options);
    this.minLength = options['minLength'] || null;
    this.maxLength = options['maxLength'] || null;
  }
}
