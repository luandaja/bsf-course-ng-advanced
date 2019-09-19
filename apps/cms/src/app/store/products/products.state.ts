import { Product } from '../../models';

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
		category: `Cateogry ${i}`,
		images: [
			{ url: 'https://bit.ly/2maZKmv', name: `image 1 product ${i}` },
			{ url: 'https://bit.ly/2ma5htw', name: `image 2 product ${i}` }
		]
	})
);

export const initalState: ProductsState = {
	products: [...dummyData],
	isLoading: false
};
