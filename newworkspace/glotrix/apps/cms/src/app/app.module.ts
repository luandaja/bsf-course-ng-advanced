import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiLayoutModule } from '@glotrix/ui/layout';
import { LayoutModule } from './layout/layout.module';

import {PreloadAllModules, RouterModule} from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    //RouterModule.forRoot([], { preloadingStrategy: PreloadAllModules }),
    UiLayoutModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
