import { Image } from '@glotrix/ui/images-upload';

export interface Product {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  isDelivered?: boolean;
  category?: string;
  images?: Image[] | File[];
}
