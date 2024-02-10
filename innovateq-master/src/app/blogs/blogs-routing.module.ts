import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsPageComponent } from './blogs-page/blogs-page.component';

const routes: Routes = [{ path: '', component: BlogsPageComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class BlogsRoutingModule {}
