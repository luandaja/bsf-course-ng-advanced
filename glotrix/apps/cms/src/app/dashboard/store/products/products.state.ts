import { Product } from '../../../models';

export interface ProductsState {
  products: Product[];
  isLoading: boolean;
}

const dummyData = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  name: `Producto ${i}`,
  description: `descripción producto ${i}`,
  price: Math.random() * 10,
  quantity: Math.random() * (1000 - 100)
}));

export const initalState: ProductsState = {
  products: [...dummyData],
  isLoading: false
};
