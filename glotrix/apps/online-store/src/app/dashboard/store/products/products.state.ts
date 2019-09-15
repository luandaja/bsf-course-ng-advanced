import { Product } from '../../../models/Product';

export interface ProductsState {
  products: Product[];
  isLoading: boolean;
}

const descriptionLorem = "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";

const dummyData = [
  {
    id: 1,
    name: 'Producto 1',
    description: descriptionLorem,
    price: 10.5,
    categoryId: 1,
    category: 'Category One',
    images: ['https://bit.ly/2maZKmv', 'https://bit.ly/2ma5htw']
  },
  {
    id: 2,
    name: 'Producto 2',
    description: descriptionLorem,
    price: 10.5,
    categoryId: 1,
    category: 'Category One',
    images: ['https://bit.ly/2mj7x1R', 'https://bit.ly/2lOfkVd']
  },
  {
    id: 3,
    name: 'Producto 3',
    description: descriptionLorem,
    price: 10.5,
    categoryId: 2,
    category: 'Category One',
    images: ['https://bit.ly/2mfndD7', 'https://bit.ly/2lULpKM']
  },
  {
    id: 4,
    name: 'Producto 4',
    description: descriptionLorem,
    price: 10.5,
    categoryId: 2,
    category: 'Category Two',
    images: ['https://bit.ly/2lN8Upb', 'https://bit.ly/2kl0vsP']
  },
  {
    id: 5,
    name: 'Producto 5',
    description: descriptionLorem,
    price: 10.5,
    categoryId: 3,
    category: 'Category Three',
    images: ['https://bit.ly/2lP4Kxa', 'https://bit.ly/2Mjfnn3']
  },
  {
    id: 6,
    name: 'Producto 6',
    description: descriptionLorem,
    price: 10.5,
    categoryId: 3,
    category: 'Category Three',
    images: ['https://bit.ly/2khVK33', 'https://bit.ly/2kK6Iyz']
  }
];

export const initalState: ProductsState = {
  products: [...dummyData],
  isLoading: false
};
