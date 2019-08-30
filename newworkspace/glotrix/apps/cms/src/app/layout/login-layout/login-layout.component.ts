import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'glotrix-login-layout',
  template: `
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./login-layout.component.scss']
})
export class LoginLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
