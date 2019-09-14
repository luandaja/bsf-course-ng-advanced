import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldType } from '../models/Field';

@Component({
  selector: 'gt-form-entry',
  templateUrl: './form-entry.component.html',
  styleUrls: ['./form-entry.component.scss']
})
export class FormEntryComponent implements OnInit {
  @Input() entry: FieldType;
  @Input() form: FormGroup;
  @Input() isSubmitted: boolean;

  constructor() {}

  ngOnInit() {}

  get isValid() {
    return this.form.controls[this.entry.key].valid;
  }

  get errors() {
    return Object.keys(this.form.controls[this.entry.key].errors);
  }

  getErrorMessage(id: string) {
    return this.entry.validations[id].message;
  }
}
