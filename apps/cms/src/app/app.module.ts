import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { RouterStoreModule } from './store/router';
import { AuthStoreModule } from './store/auth/auth-store.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    RouterStoreModule,
    AuthStoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
