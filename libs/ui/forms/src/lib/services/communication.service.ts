import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormState } from '../models/FormState';

@Injectable({ providedIn: 'root' })
export class CommunicationService {
  private subject = new BehaviorSubject<FormState>({});

  getFormState = () => this.subject.asObservable();
  setFormState = (formState: FormState) => this.subject.next(formState);
}
