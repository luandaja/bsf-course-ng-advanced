import { createReducer, on, Action } from '@ngrx/store';
import { fetchOrders, setOrders, orderDelivered } from './orders.actions';
import { OrdersState, initalState } from './orders.state';
import { Order } from '../../../models/Order';
import { OrderStatus } from '../../../models/OrderStatus';

const reducer = createReducer(
  initalState,
  on(fetchOrders, (state, { }) => ({ ...state, isLoading: true })),
  on(setOrders, (state, { orders }) => ({ ...state, orders })),
  on(orderDelivered, (state, { orderId }) => ({ ...state, orders: update(state.orders, orderId) }))
);

function update(orders: Order[], orderId: number) {
  let item = orders.filter(item => item.id === orderId)[0];
  let index = orders.indexOf(item);
  let result = orders.filter(item => item.id !== orderId);
  result.splice(index, 0, { ...item, status: 'Delivered', statusId: OrderStatus.Delivered });
  return result;
}

export function ordersReducer(state: OrdersState | undefined, action: Action) {
  return reducer(state, action);
}
