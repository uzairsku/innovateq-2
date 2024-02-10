import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'users', pathMatch: 'full' },
	{
		path: 'dashboard',
		loadChildren: () =>
			import('./dashboard/dashboard.module').then(mod => mod.DashboardModule),
	},
	{
		path: 'users',
		loadChildren: () =>
			import('./users/users.module').then(mod => mod.UsersModule),
	},
	{
		path: 'blogs',
		loadChildren: () =>
			import('./blogs/blogs.module').then(mod => mod.BlogsModule),
	},
	{ path: '**', redirectTo: '/404' },
];

@NgModule({
	imports: [CommonModule, RouterModule.forRoot(routes)],
	exports: [RouterModule],
	declarations: [],
})
export class AppRoutingModule {}
