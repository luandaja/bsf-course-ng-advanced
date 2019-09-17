import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OrdersState } from './orders.state';

const ordersFeature = createFeatureSelector<OrdersState>('orders');

export const getOrders = createSelector(
  ordersFeature,
  (state: OrdersState) => state.orders
);


export const getOrdersTotal = createSelector(
  ordersFeature,
  (state: OrdersState) => state.orders.length
);

export const getStatusListFromOrders = createSelector(
  ordersFeature,
  (state: OrdersState) =>
    [...new Set(state.orders.map(p => p.status).filter(p => p !== undefined))]
);
