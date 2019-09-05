import { Component, OnInit, Input } from '@angular/core';
import { EntryBase } from '../entries/entry-base';
import { FormGroup } from '@angular/forms';
import { EntryControlService } from '../entry-control-service';

@Component({
  selector: 'glotrix-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
  providers: [ EntryControlService ]
})
export class FormBuilderComponent implements OnInit {
  @Input() entries: EntryBase<any>[] = [];
  form: FormGroup;

  constructor(private entryControlService: EntryControlService) { }

  ngOnInit() {
    this.form = this.entryControlService.toFormGroup(this.entries);
  }
  onSubmit() {
    //TODO: this.form.value this will do something
  }
}
