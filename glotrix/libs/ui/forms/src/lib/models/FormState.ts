import { FormGroup } from '@angular/forms';

export interface FormState {
  form?: FormGroup;
  isSubmitted?: boolean;
}
