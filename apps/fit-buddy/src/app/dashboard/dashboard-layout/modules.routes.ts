import { Routes } from '@angular/router';
import { LinkOption } from '@glotrix/ui/navigation';
import startCase from 'lodash.startcase';
import { AuthGuard } from '../../core/services/auth.guard';

export const appModules: Routes = [
	{
		path: 'nutrition-plan',
		canActivate: [AuthGuard],
		loadChildren: () =>
			import('../nutrition-plan/nutrition-plan.module').then(
				mod => mod.NutritionPlanModule
			)
	},
	{
		path: 'buddy-progress',
		canActivate: [AuthGuard],
		loadChildren: () =>
			import('../progress/progress.module').then(mod => mod.ProgressModule)
	},
	{
		path: 'recipes',
		canActivate: [AuthGuard],
		loadChildren: () =>
			import('../recipes/recipes.module').then(mod => mod.RecipesModule)
	},
	{
		path: 'shop',
		canActivate: [AuthGuard],
		loadChildren: () =>
			import('../eshop/eshop.module').then(
				m => m.EshopModule
			)
	},
	{
		path: 'profile',
		canActivate: [AuthGuard],
		loadChildren: () =>
			import('../profile/profile.module').then(
				mod => mod.ProfileModule
			)
	},
];

export const appModulesAsLinkOption: LinkOption[] = appModules.map(item => ({
	url: item.path,
	text: startCase(item.path)
})) as LinkOption[];
