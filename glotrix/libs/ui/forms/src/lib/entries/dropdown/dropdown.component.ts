import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { DropdownField } from '../../models/Field';
import { CommunicationService } from '../../services/communication.service';
import { InputComponent } from '../input';

@Component({
  selector: 'gt-dropdown',
  template: `
    <ng-container *ngIf="formState$ | async as state">
      <section [formGroup]="state.form">
        <label [attr.for]="entry.key">{{ entry.label }}</label>
        <select
          [id]="entry.key"
          [formControlName]="entry.key"
          [required]="validations.required?.value"
        >
          <option *ngFor="let opt of entry.options" [value]="opt.key">{{
            opt.value
          }}</option>
        </select>
      </section>
    </ng-container>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent extends InputComponent implements OnInit {
  @Input() entry: DropdownField;
  constructor(protected communication: CommunicationService) {
    super(communication);
  }
  ngOnInit(): void {
    this.initInput();
  }
}
