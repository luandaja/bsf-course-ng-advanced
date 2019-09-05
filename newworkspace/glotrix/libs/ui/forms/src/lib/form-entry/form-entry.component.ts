import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EntryBase } from '../entries/entry-base';

@Component({
  selector: 'glotrix-form-entry',
  templateUrl: './form-entry.component.html',
  styleUrls: ['./form-entry.component.scss']
})
export class FormEntryComponent implements OnInit {

  @Input() entry: EntryBase<any>;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() { }

  get isValid() { return this.form.controls[this.entry.key].valid; }

  get errors() { return Object.keys(this.form.controls[this.entry.key].errors); }

  getErrorMessage(id: string) {
    return this.entry.validationMessages[id];
  }

}
