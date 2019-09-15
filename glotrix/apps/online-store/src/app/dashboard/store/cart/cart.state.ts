import { CartItem } from '../../../models/cartItem';

export interface CartState {
  cartItems: CartItem[];
  isLoading: boolean;
}

const descriptionLorem = "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";


const dummyData = [
  {
    id: 1,
    name: 'Producto 2',
    description: descriptionLorem,
    price: 10.5,
    quantity: 1,
    imageUrl: 'https://bit.ly/2maZKmv',
    productId: 2
  },
  {
    id: 2,
    name: 'Producto 4',
    description: descriptionLorem,
    price: 10.5,
    quantity: 2,
    imageUrl: 'https://bit.ly/2lN8Upb',
    productId: 4
  }
];
export const initalState: CartState = {
  cartItems: [...dummyData],
  isLoading: false
};
