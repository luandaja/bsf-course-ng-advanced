import { Recipe } from '../../models/Recipe';


export interface RecipeState {
	recipe: Recipe;
	isLoading: boolean;
}

export const initalState: RecipeState = {
	recipe: {
		calories: 150,
		persons: 6,
		name: "Muffin de lentejas",
		coverImage: "https://scontent.flim20-1.fna.fbcdn.net/v/t1.0-9/94814661_643977936151422_1647124828508913664_n.jpg?_nc_cat=109&_nc_sid=110474&_nc_eui2=AeEmPcXsG-aIMNkgTGqswBRVRai9YPJPgKBFqL1g8k-AoMoXsUQ6fyIMkpTeSPrzArM&_nc_ohc=FgIWqVZN_EcAX9bFGL4&_nc_ht=scontent.flim20-1.fna&oh=6a0057e14ed31d890767c68df9e19ebe&oe=5ED218C4",
		images: [
			"https://scontent.flim20-1.fna.fbcdn.net/v/t1.0-9/95012597_643978052818077_1697150825161293824_n.jpg?_nc_cat=100&_nc_sid=110474&_nc_eui2=AeGBgYZgtrKhCo45P4iwd-2MAkSpEePy0xMCRKkR4_LTE_w4nJ1Iv-CBfttpia-Wywk&_nc_ohc=cnItm4W-YQUAX9zxBwf&_nc_ht=scontent.flim20-1.fna&oh=94f65b91007a765120340106f2ecc9eb&oe=5ED813C2",
			"https://scontent.flim20-1.fna.fbcdn.net/v/t1.0-9/95916175_643978006151415_600640331553177600_n.jpg?_nc_cat=103&_nc_sid=110474&_nc_eui2=AeEm72NxFfCT5Gc9WfxIdGv3fwGP9aEzzUt_AY_1oTPNS1rRr_XeOyqgbr25rTKF5Ic&_nc_ohc=P-jPY5Ps81EAX8u6PdF&_nc_ht=scontent.flim20-1.fna&oh=6c27cadf9884c5e800ae4a7ffaf5857b&oe=5ED8945B",
			"https://scontent.flim20-1.fna.fbcdn.net/v/t1.0-9/94998308_643978102818072_5462041117279125504_n.jpg?_nc_cat=111&_nc_sid=110474&_nc_eui2=AeH0ag16vD-qWeyNuLeWQ91IpXEjF-vPzSmlcSMX68_NKW-A0tu9TCrJuAeM9qhN4T0&_nc_ohc=Yz6v0i-CwmEAX-KiAWb&_nc_ht=scontent.flim20-1.fna&oh=b103341747324105ab6ce24b0f427c4b&oe=5ED6EEB5",
			"https://scontent.flim20-1.fna.fbcdn.net/v/t1.0-9/95198203_643978189484730_7314115329817313280_n.jpg?_nc_cat=104&_nc_sid=110474&_nc_eui2=AeElYT8ReaE2gQj-lSGQwcD0RCZ19ow-HfVEJnX2jD4d9bgBnFsm6RJfKCOH4QAxvFc&_nc_ohc=Wjf0YDHYXCcAX9Dfgho&_nc_ht=scontent.flim20-1.fna&oh=b7d4aa2631a073d3a06228f850505f2a&oe=5ED95142",
			"https://scontent.flim20-1.fna.fbcdn.net/v/t1.0-9/95390674_643832592832623_7306045773462896640_n.jpg?_nc_cat=106&_nc_sid=110474&_nc_eui2=AeHJWssJt1FXhiK5G5Z8ssc8WIaPLMUJUb5Yho8sxQlRvodzKre64AGxd-hSy5AIXYg&_nc_ohc=WcKhQYH_xAQAX_1BMfG&_nc_ht=scontent.flim20-1.fna&oh=5a46857aa92d219b0a92d4214cb25f6f&oe=5ED8D29A",
			"https://scontent.flim20-1.fna.fbcdn.net/v/t1.0-9/95436969_643832559499293_6393273057359691776_n.jpg?_nc_cat=105&_nc_sid=110474&_nc_eui2=AeEflaxWfP5IYOrd5UFzPhlOgmAjiZLGGC-CYCOJksYYL62ikfRq04VAko5D4On6IZo&_nc_ohc=x0LpahhABAoAX9oyMFF&_nc_ht=scontent.flim20-1.fna&oh=a3158a393237efc303c5012843022c8c&oe=5ED76CBE",
			"https://scontent.flim20-1.fna.fbcdn.net/v/t1.0-9/94814661_643977936151422_1647124828508913664_n.jpg?_nc_cat=109&_nc_sid=110474&_nc_eui2=AeEmPcXsG-aIMNkgTGqswBRVRai9YPJPgKBFqL1g8k-AoMoXsUQ6fyIMkpTeSPrzArM&_nc_ohc=FgIWqVZN_EcAX9bFGL4&_nc_ht=scontent.flim20-1.fna&oh=6a0057e14ed31d890767c68df9e19ebe&oe=5ED218C4"
		],
		description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
		ingredients: [
			{ units: "2 tazas", name: "Lenteja sancochada" },
			{ units: "1 taza", name: "Panela (o 2 sobres de Stevia)" },
			{ units: "1", name: "Plátano" },
			{ units: "1", name: "Manzana" },
			{ units: "3/4 taza", name: "Aceite de Coco o Oliva" },
			{ units: "1/2 taza", name: "Jugo de naranja" },
			{ units: "2 1/2 tazas", name: "Harina integral" },
			{ units: "1 cucharadita", name: "Sal" },
			{ units: "1 cucharadita", name: "Bicarbonato" },
			{ units: "1/2 taza", name: "Cacao en polvo" },
			{ units: "1/2 taza", name: "Chip" }
		],
		steps: [
			"Sancochar las lentejas previamente remojadas solo en agua.",
			"Licuar las lentejas, plátanos,1/2 manzana y el jugo de naranja. Tendrás una mezcla espesa!",
			"Mexclar esta masa con la harina, bicarbonato, sal, panela y aceite.",
			"Picar en cubitos la manzana que nos quedó para decorar.!",
			"Precalentar el horno por 25 minutos a 180 grados"
		]
	},
	isLoading: false
};
