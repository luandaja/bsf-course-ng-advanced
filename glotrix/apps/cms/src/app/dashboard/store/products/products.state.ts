import { Product } from '../../../models';

export interface ProductsState {
  products: Product[];
  isLoading: boolean;
}

const dummyData = [
  {
    id: 1,
    name: 'Producto 1',
    description: 'descripción producto 1',
    price: 10.5,
    quantity: 100
  },
  {
    id: 1,
    name: 'Producto 1',
    description: 'descripción producto 1',
    price: 10.5,
    quantity: 100
  }
];

export const initalState: ProductsState = {
  products: [...dummyData],
  isLoading: false
};
