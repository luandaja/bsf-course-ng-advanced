import { Product } from 'apps/cms/src/app/models';

export interface ProductsState {
  products: Product[];
  isLoading: boolean;
}

const dummyData = Array.from(
  { length: 12 },
  (_, i): Product => ({
    id: i,
    name: `Producto ${i}`,
    description: `descripción producto ${i}`,
    price: Math.random() * 10,
    quantity: Math.random() * (1000 - 100),
    category: `Cateogry ${i}`
  })
);

export const initalState: ProductsState = {
  products: [...dummyData],
  isLoading: false
};
