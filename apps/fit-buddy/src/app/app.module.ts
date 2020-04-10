import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [BrowserModule, RouterModule.forRoot([], { initialNavigation: 'enabled' })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
