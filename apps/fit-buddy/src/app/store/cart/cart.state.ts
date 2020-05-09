import { CartItem } from '../../models/cartItem';

export interface CartState {
	cartItems: CartItem[];
	isLoading: boolean;
}

const descriptionLorem = "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.";


const dummyData = [
	{
		id: 1,
		name: 'Producto 1',
		description: descriptionLorem,
		price: 10.5,
		quantity: 1,
		productId: 2,
		imageUrl: 'https://scontent.flim20-1.fna.fbcdn.net/v/t1.0-9/s960x960/96257035_648501469032402_9188908995933372416_o.jpg?_nc_cat=106&_nc_sid=110474&_nc_eui2=AeET-4NSjfY7VRUp2lljv6TpW0j3aTPKP_pbSPdpM8o_-gsZKnMG-v32aY-ak1B9UZM&_nc_ohc=MdCij7jzBXAAX8ROfSr&_nc_ht=scontent.flim20-1.fna&_nc_tp=7&oh=07539cc2774b52d2332614a54dbfbe38&oe=5EDD509F'
	},
	{
		id: 2,
		name: 'Producto 2',
		description: descriptionLorem,
		price: 10.5,
		quantity: 1,
		productId: 2,
		imageUrl: 'https://scontent.flim20-1.fna.fbcdn.net/v/t1.0-9/p960x960/95681342_646256585923557_1611060344606687232_o.jpg?_nc_cat=104&_nc_sid=110474&_nc_eui2=AeHCJOav9geb4HmRQK9jM6gkpj5p91GHKKWmPmn3UYcopUQ4YLhJC3cgmU-Fr_OF9nY&_nc_ohc=UGfcY9CE8GIAX8E-A5h&_nc_ht=scontent.flim20-1.fna&_nc_tp=6&oh=926a8f974a7e23c4201bd5a6ffc0e8bc&oe=5EDAC1EA'
	},
	{
		id: 3,
		name: 'Producto 3',
		description: descriptionLorem,
		price: 10.5,
		quantity: 1,
		productId: 2,
		imageUrl: 'https://scontent.flim20-1.fna.fbcdn.net/v/t1.0-9/p720x720/94490943_641593439723205_7715757757688709120_o.jpg?_nc_cat=103&_nc_sid=110474&_nc_eui2=AeHjfEKEavswyf3eeMFj7sXbyW7f6lVoyjXJbt_qVWjKNR5bhc2Zwgto8kxm0LTBuHA&_nc_ohc=Wm_5u69C4wkAX8GZFJv&_nc_ht=scontent.flim20-1.fna&_nc_tp=6&oh=0b9d5eb152d41915150d79aa6bc92869&oe=5EDBE4A9'
	}
];
export const initalState: CartState = {
	cartItems: [...dummyData],
	isLoading: false
};
