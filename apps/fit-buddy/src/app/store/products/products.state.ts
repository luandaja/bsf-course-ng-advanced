import { Product } from '../../models/Product';

export interface ProductsState {
	products: Product[];
	isLoading: boolean;
}

const descriptionLorem = "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.";

const dummyData = [
	{
		id: 1,
		name: 'Producto 1',
		description: descriptionLorem,
		price: 10.5,
		categoryId: 1,
		category: 'Category One',
		images: ['https://scontent.flim20-1.fna.fbcdn.net/v/t1.0-9/s960x960/96257035_648501469032402_9188908995933372416_o.jpg?_nc_cat=106&_nc_sid=110474&_nc_eui2=AeET-4NSjfY7VRUp2lljv6TpW0j3aTPKP_pbSPdpM8o_-gsZKnMG-v32aY-ak1B9UZM&_nc_ohc=MdCij7jzBXAAX8ROfSr&_nc_ht=scontent.flim20-1.fna&_nc_tp=7&oh=07539cc2774b52d2332614a54dbfbe38&oe=5EDD509F',
			'https://scontent.flim20-1.fna.fbcdn.net/v/t1.0-9/s960x960/96257035_648501469032402_9188908995933372416_o.jpg?_nc_cat=106&_nc_sid=110474&_nc_eui2=AeET-4NSjfY7VRUp2lljv6TpW0j3aTPKP_pbSPdpM8o_-gsZKnMG-v32aY-ak1B9UZM&_nc_ohc=MdCij7jzBXAAX8ROfSr&_nc_ht=scontent.flim20-1.fna&_nc_tp=7&oh=07539cc2774b52d2332614a54dbfbe38&oe=5EDD509F']
	},
	{
		id: 2,
		name: 'Producto 2',
		description: descriptionLorem,
		price: 10.5,
		categoryId: 1,
		category: 'Category One',
		images: ['https://scontent.flim20-1.fna.fbcdn.net/v/t1.0-9/p960x960/95681342_646256585923557_1611060344606687232_o.jpg?_nc_cat=104&_nc_sid=110474&_nc_eui2=AeHCJOav9geb4HmRQK9jM6gkpj5p91GHKKWmPmn3UYcopUQ4YLhJC3cgmU-Fr_OF9nY&_nc_ohc=UGfcY9CE8GIAX8E-A5h&_nc_ht=scontent.flim20-1.fna&_nc_tp=6&oh=926a8f974a7e23c4201bd5a6ffc0e8bc&oe=5EDAC1EA',
			'https://scontent.flim20-1.fna.fbcdn.net/v/t1.0-9/p960x960/95681342_646256585923557_1611060344606687232_o.jpg?_nc_cat=104&_nc_sid=110474&_nc_eui2=AeHCJOav9geb4HmRQK9jM6gkpj5p91GHKKWmPmn3UYcopUQ4YLhJC3cgmU-Fr_OF9nY&_nc_ohc=UGfcY9CE8GIAX8E-A5h&_nc_ht=scontent.flim20-1.fna&_nc_tp=6&oh=926a8f974a7e23c4201bd5a6ffc0e8bc&oe=5EDAC1EA']
	},
	{
		id: 3,
		name: 'Producto 3',
		description: descriptionLorem,
		price: 10.5,
		categoryId: 2,
		category: 'Category One',
		images: ['https://scontent.flim20-1.fna.fbcdn.net/v/t1.0-9/p720x720/94490943_641593439723205_7715757757688709120_o.jpg?_nc_cat=103&_nc_sid=110474&_nc_eui2=AeHjfEKEavswyf3eeMFj7sXbyW7f6lVoyjXJbt_qVWjKNR5bhc2Zwgto8kxm0LTBuHA&_nc_ohc=Wm_5u69C4wkAX8GZFJv&_nc_ht=scontent.flim20-1.fna&_nc_tp=6&oh=0b9d5eb152d41915150d79aa6bc92869&oe=5EDBE4A9',
			'https://scontent.flim20-1.fna.fbcdn.net/v/t1.0-9/p720x720/94490943_641593439723205_7715757757688709120_o.jpg?_nc_cat=103&_nc_sid=110474&_nc_eui2=AeHjfEKEavswyf3eeMFj7sXbyW7f6lVoyjXJbt_qVWjKNR5bhc2Zwgto8kxm0LTBuHA&_nc_ohc=Wm_5u69C4wkAX8GZFJv&_nc_ht=scontent.flim20-1.fna&_nc_tp=6&oh=0b9d5eb152d41915150d79aa6bc92869&oe=5EDBE4A9']
	},
	{
		id: 4,
		name: 'Producto 4',
		description: descriptionLorem,
		price: 10.5,
		categoryId: 2,
		category: 'Category Two',
		images: ['https://scontent.flim20-1.fna.fbcdn.net/v/t1.0-9/94353936_638849813330901_1826999115427348480_n.jpg?_nc_cat=106&_nc_sid=110474&_nc_eui2=AeEmk_qkP0S8rX2SrJfou24pg5sJCuwPHqmDmwkK7A8eqUqJ5p6aEYmPwXb5bKqp7bQ&_nc_ohc=0FVxj6nxTikAX_kYBQn&_nc_ht=scontent.flim20-1.fna&oh=c36e9db3f26cae9ac1d72c2cec1b2c21&oe=5EDA5910',
			'https://scontent.flim20-1.fna.fbcdn.net/v/t1.0-9/94353936_638849813330901_1826999115427348480_n.jpg?_nc_cat=106&_nc_sid=110474&_nc_eui2=AeEmk_qkP0S8rX2SrJfou24pg5sJCuwPHqmDmwkK7A8eqUqJ5p6aEYmPwXb5bKqp7bQ&_nc_ohc=0FVxj6nxTikAX_kYBQn&_nc_ht=scontent.flim20-1.fna&oh=c36e9db3f26cae9ac1d72c2cec1b2c21&oe=5EDA5910']
	},
	{
		id: 5,
		name: 'Producto 5',
		description: descriptionLorem,
		price: 10.5,
		categoryId: 3,
		category: 'Category Three',
		images: ['https://scontent.flim20-1.fna.fbcdn.net/v/t1.0-9/p720x720/94158338_638848939997655_4758641172023345152_o.jpg?_nc_cat=111&_nc_sid=110474&_nc_eui2=AeEB1MogPULPrUYeWj1O_pcWAYod2SBEnS4Bih3ZIESdLkJSGUp-UzYS9NiTTlD4RBs&_nc_ohc=O7WFuwx6x3gAX8SpLIc&_nc_ht=scontent.flim20-1.fna&_nc_tp=6&oh=4116a7f2b3c1cf0581c644aef4783b36&oe=5EDA1A93',
			'https://scontent.flim20-1.fna.fbcdn.net/v/t1.0-9/p720x720/94158338_638848939997655_4758641172023345152_o.jpg?_nc_cat=111&_nc_sid=110474&_nc_eui2=AeEB1MogPULPrUYeWj1O_pcWAYod2SBEnS4Bih3ZIESdLkJSGUp-UzYS9NiTTlD4RBs&_nc_ohc=O7WFuwx6x3gAX8SpLIc&_nc_ht=scontent.flim20-1.fna&_nc_tp=6&oh=4116a7f2b3c1cf0581c644aef4783b36&oe=5EDA1A93']
	},
	{
		id: 6,
		name: 'Producto 6',
		description: descriptionLorem,
		price: 10.5,
		categoryId: 3,
		category: 'Category Three',
		images: ['https://scontent.flim20-1.fna.fbcdn.net/v/t1.0-9/92951389_630004834215399_4821693860319068160_n.jpg?_nc_cat=111&_nc_sid=110474&_nc_eui2=AeEhunZ1zOE4bZHI1yYwAxuzoSxFZfX35jGhLEVl9ffmMcGE8D2JcfbKnBs0hyCgW9c&_nc_ohc=70v2YPp2SeEAX8xlGV8&_nc_ht=scontent.flim20-1.fna&oh=a6531015e805c716f92f8993241e7bb3&oe=5EDD9C87', 'https://scontent.flim20-1.fna.fbcdn.net/v/t1.0-9/92951389_630004834215399_4821693860319068160_n.jpg?_nc_cat=111&_nc_sid=110474&_nc_eui2=AeEhunZ1zOE4bZHI1yYwAxuzoSxFZfX35jGhLEVl9ffmMcGE8D2JcfbKnBs0hyCgW9c&_nc_ohc=70v2YPp2SeEAX8xlGV8&_nc_ht=scontent.flim20-1.fna&oh=a6531015e805c716f92f8993241e7bb3&oe=5EDD9C87']
	}
];

export const initalState: ProductsState = {
	products: [...dummyData],
	isLoading: false
};
