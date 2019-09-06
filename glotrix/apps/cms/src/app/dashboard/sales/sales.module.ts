import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesManagerComponent } from './sales-manager/sales-manager.component';
import { UiSearchBarModule } from '@glotrix/ui/search-bar';
import { UiTablesModule } from '@glotrix/ui/tables';


@NgModule({
  declarations: [SalesManagerComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
    UiSearchBarModule,
    UiTablesModule
  ]
})
export class SalesModule { }
