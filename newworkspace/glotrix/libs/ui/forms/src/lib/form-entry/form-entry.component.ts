import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EntryBase } from '../entries/entry-base';

@Component({
  selector: 'glotrix-form-entry',
  templateUrl: './form-entry.component.html',
  styleUrls: ['./form-entry.component.scss']
})
export class FormEntryComponent implements OnInit {
  @Input() displayMessage: { [key: string]: string };
  @Input() entry: EntryBase<any>;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
