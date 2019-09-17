import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OrdersState } from './orders.state';

const ordersFeature = createFeatureSelector<OrdersState>('orders');

export const getOrders = createSelector(
  ordersFeature,
  (state: OrdersState) => state.orders
);
