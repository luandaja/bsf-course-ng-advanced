import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Field } from '../../models/Field';
import { InputComponent } from '../input';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'gt-textbox',
  template: `
    <ng-container *ngIf="formState$ | async as state">
      <section [formGroup]="state.form">
        <label [attr.for]="entry.key">{{ entry.label }}</label>
        <input
          class="form-control"
          type="text"
          [id]="entry.key"
          [formControlName]="entry.key"
          [placeholder]="entry.placeholder || ''"
          [ngClass]="{ 'is-invalid': !control.valid && state.isSubmitted }"
          [required]="validations.required?.value"
          [minlength]="validations.minlength?.value"
          [maxlength]="validations.maxlength?.value"
        />

        <small *ngIf="validations.maxlength"
          >{{ control.value.length }} / {{ validations.maxlength.value }}</small
        >
      </section>
    </ng-container>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TexboxComponent extends InputComponent implements OnInit {
  @Input() entry: Field;
  constructor(protected communication: CommunicationService) {
    super(communication);
  }
  ngOnInit(): void {
    this.initInput();
  }
}
