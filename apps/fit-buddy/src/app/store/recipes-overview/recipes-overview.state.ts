import { Recipe } from '../../models/Recipe';
import { identifierModuleUrl } from '@angular/compiler';


export interface RecipesOverviewState {
	recipes: Recipe[];
	isLoading: boolean;
}

const dummyData = Array.from(
	{ length: 50 },
	(_, i): Recipe => ({
		name: `Recipe ${i}`,
		description: `descripción recipe ${i}`,
		calories: Math.random() * 10,
		persons: Math.random() * (1000 - 100),
		id: i,
		coverImage: "https://scontent.flim20-1.fna.fbcdn.net/v/t1.0-9/94814661_643977936151422_1647124828508913664_n.jpg?_nc_cat=109&_nc_sid=110474&_nc_eui2=AeEmPcXsG-aIMNkgTGqswBRVRai9YPJPgKBFqL1g8k-AoMoXsUQ6fyIMkpTeSPrzArM&_nc_ohc=FgIWqVZN_EcAX9bFGL4&_nc_ht=scontent.flim20-1.fna&oh=6a0057e14ed31d890767c68df9e19ebe&oe=5ED218C4"
	})
);

export const initalState: RecipesOverviewState = {
	recipes: [...dummyData],
	isLoading: false
};
