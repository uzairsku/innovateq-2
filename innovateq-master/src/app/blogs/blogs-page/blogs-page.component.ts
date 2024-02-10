import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Blogs } from '../models/blogs.model';
import { BaseComponent } from 'src/app/shared/base.component';

@Component({
	selector: 'app-blogs-page',
	templateUrl: './blogs-page.component.html',
	styleUrls: ['blogs-page.scss'],
})
export class BlogsPageComponent extends BaseComponent implements OnInit {
	blogPosts$: Observable<Blogs[]> = new Observable();

	ngOnInit() {
		this.getBlogsData('blogs');
	}

	getBlogsData(apiName: string) {
		this.getPageData(apiName).subscribe(blogs => {
			this.blogPosts$ = blogs;
		});
	}
}
