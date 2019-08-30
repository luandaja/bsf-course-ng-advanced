import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiLayoutModule } from '@glotrix/ui/layout';
//import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { ProfileEditorModule } from './profile-editor/profile-editor.module';

import {PreloadAllModules, RouterModule} from '@angular/router';
import { ProductManagerModule } from './product-manager/product-manager.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    UiLayoutModule,
  //  AppRoutingModule,
    LayoutModule,
  ProductManagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
