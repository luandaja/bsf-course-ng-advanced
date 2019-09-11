import { createAction, props } from '@ngrx/store';
import { Product } from '../../../models';

export const fetchProducts = createAction('[Products] Fetch products');
export const setProducts = createAction(
  '[Products] Set products',
  props<{ products: Product[] }>()
);
