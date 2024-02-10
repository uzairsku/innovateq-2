import { NgModule } from '@angular/core';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsPageComponent } from './blogs-page/blogs-page.component';

import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ChunkPipe } from '../shared/chunk.pipe';

@NgModule({
	declarations: [BlogsPageComponent, ChunkPipe],
	imports: [BlogsRoutingModule, SharedModule, CommonModule],
})
export class BlogsModule {}
