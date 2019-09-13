import { EntryBase } from './entry-base';

export class TextblockEntry extends EntryBase<string> {
  controlType = 'textblock';
  minlength: number;
  rows: number;

  constructor(options: {} = {}) {
    super(options);
    this.minlength = options['minlength'] || null;
    this.rows = options['rows'] || 3;
  }
}
