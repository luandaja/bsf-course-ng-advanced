import { Order } from '../../../models/Order';
import { OrderStatus } from '../../../models/OrderStatus';

export interface OrdersState {
  orders: Order[];
  isLoading: boolean;
}
const orderItems = [
  { productId: 2, productName: 'Producto 2', quantity: 1, price: 10.5 },
  { productId: 3, productName: 'Producto 3', quantity: 2, price: 8.5 },
  { productId: 4, productName: 'Producto 4', quantity: 1, price: 39.9 }
]

const dummyData = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  date: new Date(),
  total: Math.random() * 10,
  status: 'Paid',
  statusId: OrderStatus.Paid,
  clientName: `Client Name ${i + 1}`,
  items: orderItems
}));

export const initalState: OrdersState = {
  orders: [...dummyData],
  isLoading: false
};
