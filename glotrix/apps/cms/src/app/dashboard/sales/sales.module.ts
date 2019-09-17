import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesManagerComponent } from './sales-manager/sales-manager.component';
import { UiSearchBarModule } from '@glotrix/ui/search-bar';
import { UiTablesModule } from '@glotrix/ui/tables';
import { TableMainComponent } from './table-main/table-main.component';
import { StoreModule } from '@ngrx/store';
import { ordersReducer } from '../store/orders/orders.reducer';
import { OrderFiltersService } from './service/order-filter.service';


@NgModule({
  declarations: [SalesManagerComponent, TableMainComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
    UiSearchBarModule,
    UiTablesModule,
    StoreModule.forFeature('orders', ordersReducer),
  ],
  providers: [OrderFiltersService],
})
export class SalesModule { }
