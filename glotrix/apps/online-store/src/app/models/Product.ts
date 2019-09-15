export interface Product {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  categoryId?: number;
  category?: string;
  images: string[];
}
