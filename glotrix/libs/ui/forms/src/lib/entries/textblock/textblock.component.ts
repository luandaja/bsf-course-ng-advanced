import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TextblockField } from '../../models/Field';
import { CommunicationService } from '../../services/communication.service';
import { InputComponent } from '../input';

@Component({
  selector: 'gt-textblock',
  template: `
    <ng-container *ngIf="formState$ | async as state">
      <section [formGroup]="state.form">
        <label [attr.for]="entry.key">{{ entry.label }}</label>
        <textarea
          class="form-control"
          [id]="entry.key"
          [rows]="entry.rows"
          [formControlName]="entry.key"
          [ngClass]="{ 'is-invalid': !control.valid && state.isSubmitted }"
          [required]="validations.required?.value"
          [minlength]="validations.minlength?.value"
          [maxlength]="validations.maxlength?.value"
        >
        </textarea>
        <small *ngIf="validations.maxlength"
          >{{ control.value.length }} / {{ validations.maxlength.value }}</small
        >
      </section>
    </ng-container>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextblockComponent extends InputComponent implements OnInit {
  @Input() entry: TextblockField;
  constructor(protected communication: CommunicationService) {
    super(communication);
  }
  ngOnInit(): void {
    this.initInput();
  }
}
