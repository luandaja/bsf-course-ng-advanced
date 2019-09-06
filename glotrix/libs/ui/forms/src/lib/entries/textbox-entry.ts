import { EntryBase } from './entry-base';

export class TextboxEntry extends EntryBase<string> {
  controlType = 'textbox';

  constructor(options: {} = {}) {
    super(options);
  }
}
