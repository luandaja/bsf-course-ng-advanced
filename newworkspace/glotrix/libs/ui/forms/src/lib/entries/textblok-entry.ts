import { EntryBase } from './entry-base';

export class TextblockEntry extends EntryBase<string> {
  controlType = 'textblock';
  minLength: number;
  maxLength: number;
  rows: number;

  constructor(options: {} = {}) {
    super(options);
    this.minLength = options['minLength'] || null;
    this.maxLength = options['maxLength'] || null;
    this.rows = options['rows'] || 3;
  }
}
