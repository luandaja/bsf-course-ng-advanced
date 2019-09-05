import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UiNavigationModule } from '@glotrix/ui/navigation';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UiNavigationModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
