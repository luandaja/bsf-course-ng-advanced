import { Product } from '../../../models/Product';

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
    categoryId: 1,
    images: ['https://bit.ly/2maZKmv', 'https://bit.ly/2ma5htw']
  },
  {
    id: 2,
    name: 'Producto 2',
    description: 'descripción producto 2',
    price: 10.5,
    categoryId: 1,
    images: ['https://bit.ly/2mj7x1R', 'https://bit.ly/2lOfkVd']
  },
  {
    id: 3,
    name: 'Producto 3',
    description: 'descripción producto 3',
    price: 10.5,
    categoryId: 2,
    images: ['https://bit.ly/2mfndD7', 'https://bit.ly/2lULpKM']
  },
  {
    id: 4,
    name: 'Producto 4',
    description: 'descripción producto 4',
    price: 10.5,
    categoryId: 2,
    images: ['https://bit.ly/2lN8Upb', 'https://bit.ly/2kl0vsP']
  },
  {
    id: 5,
    name: 'Producto 5',
    description: 'descripción producto 5',
    price: 10.5,
    categoryId: 3,
    images: ['https://bit.ly/2lP4Kxa', 'https://bit.ly/2Mjfnn3']
  },
  {
    id: 6,
    name: 'Producto 6',
    description: 'descripción producto 6',
    price: 10.5,
    categoryId: 3,
    images: ['https://bit.ly/2khVK33', 'https://bit.ly/2kK6Iyz']
  }
];

export const initalState: ProductsState = {
  products: [...dummyData],
  isLoading: false
};
