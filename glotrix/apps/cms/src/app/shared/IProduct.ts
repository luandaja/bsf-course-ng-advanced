export interface IProduct {
  id?: number,
  name?: string,
  description?: string,
  price?: number,
  quantity?: number,
  isDelivered?: boolean,
  category?: string;
  images?: string[];
}
