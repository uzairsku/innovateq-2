import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-page-toolbar',
	templateUrl: './page-toolbar.component.html',
	styleUrls: ['./page-toolbar.component.scss'],
})
export class PageToolbarComponent {
	@Input({ required: true }) name: any = '';
	@Input({ required: true }) Description = '';
	@Input({ required: true }) icon = '';
}
