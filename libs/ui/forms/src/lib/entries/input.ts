import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, tap } from 'rxjs/operators';
import { FieldType } from '../models/Field';
import { ValidationType } from '../models/Types';
import { CommunicationService } from '../services/communication.service';
import { FormState } from '../models/FormState';

export class InputComponent {
  entry: FieldType;
  formState$: Observable<FormState>;
  control: any;
  validations: ValidationType;
  constructor(protected communication: CommunicationService) {}

  initInput() {
    this.formState$ = this.communication
      .getFormState()
      .pipe(tap(state => (this.control = state.form.controls[this.entry.key])));

    this.validations = this.entry.validations || {};
  }
}
