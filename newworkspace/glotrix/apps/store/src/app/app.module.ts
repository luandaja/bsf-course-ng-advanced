import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UiLayoutModule } from '@glotrix/ui/layout';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UiLayoutModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
