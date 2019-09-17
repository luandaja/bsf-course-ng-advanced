import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { PasswordField } from '../../models/Field';
import { CommunicationService } from '../../services/communication.service';
import { InputComponent } from '../input';

@Component({
  selector: 'gt-password',
  template: `
    <ng-container *ngIf="formState$ | async as state">
      <section [formGroup]="state.form">
        <label [attr.for]="entry.key">{{ entry.label }}</label>
        <input
          class="form-control"
          type="password"
          [id]="entry.key"
          [formControlName]="entry.key"
          [ngClass]="{ 'is-invalid': !control.valid && state.isSubmitted }"
          [required]="validations.required?.value"
          [minlength]="validations.minlength?.value"
          [maxlength]="validations.maxlength?.value"
        />
      </section>
    </ng-container>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordComponent extends InputComponent implements OnInit {
  @Input() entry: PasswordField;
  constructor(protected communication: CommunicationService) {
    super(communication);
  }
  ngOnInit(): void {
    this.initInput();
  }
}
