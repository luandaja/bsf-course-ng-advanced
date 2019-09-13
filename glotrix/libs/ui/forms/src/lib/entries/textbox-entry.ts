import { EntryBase } from './entry-base';

export class TextboxEntry extends EntryBase<string> {
  controlType = 'textbox';
  placeholder = '';
  minlength: number;
  pattern: string;

  constructor(options: {} = {}) {
    super(options);
    this.placeholder = options['placeholder'] || '';
    this.minlength = options['minlength'] || null;
    this.pattern = options['pattern'] || null;
  }
}
