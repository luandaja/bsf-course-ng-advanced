import { Order } from '../../models/Order';
import { createAction, props } from '@ngrx/store';

export const fetchOrders = createAction('[Orders] Fetch orders');

export const setOrders = createAction(
  '[Orders] Set orders',
  props<{ orders: Order[] }>()
);

export const orderDelivered = createAction(
  '[Orders] Set order delivered',
  props<{ orderId: number }>()
);
