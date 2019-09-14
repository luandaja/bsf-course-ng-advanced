import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { CommunicationService } from '../services/communication.service';
import { EntryControlService } from '../services/entry-control.service';
import { FieldType } from '../models/Field';

@Component({
  selector: 'gt-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
  providers: [EntryControlService]
})
export class FormBuilderComponent implements OnInit {
  @Input() entries: FieldType[] = [];
  @Input() isCancelButtonVisible = true;
  @Input() submitButtonText = 'Save';
  @Output() submitted = new EventEmitter<any>();

  form: FormGroup;
  isSubmitted = false;

  constructor(
    private entryControlService: EntryControlService,
    private communication: CommunicationService
  ) {}

  ngOnInit() {
    this.form = this.entryControlService.toFormGroup(this.entries);
    this.communication.setFormState({ form: this.form, isSubmitted: this.isSubmitted });
  }

  onSubmit() {
    this.isSubmitted = true;
    this.communication.setFormState({ form: this.form, isSubmitted: this.isSubmitted });
    if (this.form.invalid) return;
    this.submitted.emit(this.form.value);
  }
}
