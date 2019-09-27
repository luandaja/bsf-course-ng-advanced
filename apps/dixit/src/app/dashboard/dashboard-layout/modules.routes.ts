import { Routes } from '@angular/router';
import { LinkOption } from '@glotrix/ui/navigation';
import startCase from 'lodash.startcase';
import { AuthGuard } from '../../core/services/auth.guard';

export const appModules: Routes = [
	{
		path: 'board',
		canActivate: [AuthGuard],
		loadChildren: () =>
			import('../board/board.module').then(
				m => m.BoardModule
			)
	},
	{
		path: 'hand',
		canActivate: [AuthGuard],
		loadChildren: () =>
			import('../player/player.module').then(
				mod => mod.PlayerModule
			)
	},
	{
		path: 'score',
		canActivate: [AuthGuard],
		loadChildren: () =>
			import('../score/score.module').then(
				mod => mod.ScoreModule
			)
	}
];

export const appModulesAsLinkOption: LinkOption[] = appModules.map(item => ({
	url: item.path,
	text: startCase(item.path)
})) as LinkOption[];
