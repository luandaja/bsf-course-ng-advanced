import { OrderItem } from './OrderItem';

export interface Order {
  id?: number;
  date?: Date;
  total?: number;
  status?: string;
  statusId?: number;
  clientName?: string;
  items?: OrderItem[];
}
