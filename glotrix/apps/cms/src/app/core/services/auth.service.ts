import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  logIn(email: string, password: string): Observable<any> {
    //const url = `${this.BASE_URL}/login`;
    return from('belatrix user');
  }
}
