import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesManagerComponent } from './sales-manager/sales-manager.component';
import { UiSearchBarModule } from '@glotrix/ui/search-bar';
import { UiTablesModule } from '@glotrix/ui/tables';
import { TableMainComponent } from './table-main/table-main.component';
import { OrdersStoreModule } from '../../store/orders/orders-store.module';
import { OrderTableFilterStoreModule } from '../../store/order-table-filter/order-table-filter-store.module';
import { StatusFilterComponent } from './status-filter/status-filter.component';


@NgModule({
  declarations: [SalesManagerComponent, TableMainComponent, StatusFilterComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
    UiSearchBarModule,
    UiTablesModule,
    OrdersStoreModule,
    OrderTableFilterStoreModule
  ]
})
export class SalesModule { }
