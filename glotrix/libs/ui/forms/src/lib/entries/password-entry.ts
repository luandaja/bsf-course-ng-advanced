import { EntryBase } from './entry-base';

export class PasswordEntry extends EntryBase<string> {
  controlType = 'password';
  minlength: number;

  constructor(options: {} = {}) {
    super(options);
    this.minlength = options['minlength'] || null;
  }
}
