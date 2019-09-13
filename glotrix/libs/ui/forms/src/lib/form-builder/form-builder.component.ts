import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EntryBase } from '../entries/entry-base';
import { FormGroup } from '@angular/forms';
import { EntryControlService } from '../entry-control-service';

@Component({
  selector: 'gt-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
  providers: [EntryControlService]
})
export class FormBuilderComponent implements OnInit {
  @Input() entries: EntryBase<any>[] = [];
  @Input() isCancelButtonVisible = true;
  @Input() submitButtonText = 'Save';
  @Output() submitted = new EventEmitter<any>();

  form: FormGroup;
  isSubmitted = false;

  constructor(private entryControlService: EntryControlService) {}

  ngOnInit() {
    this.form = this.entryControlService.toFormGroup(this.entries);
    console.log(this.form);
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.form.invalid) {
      return;
    }
    this.submitted.emit(this.form.value);
  }

}
