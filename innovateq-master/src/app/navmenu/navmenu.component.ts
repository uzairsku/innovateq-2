import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BaseComponent } from '../shared/base.component';
import { Observable, Subscription } from 'rxjs';
import { Menu } from './models/navmenu.model';

@Component({
	selector: 'app-navmenu',
	templateUrl: './navmenu.component.html',
})
export class NavmenuComponent extends BaseComponent implements OnInit {
	apiName = 'menu';
	menuArray = [];

	menu$: Observable<Menu> = new Observable();
	private menuSubscription: Subscription;

	ngOnInit(): void {
		this.getMenu();
	}

	ngOnDestroy() {
		// Unsubscribe from all subscriptions to prevent memory leaks
		this.menuSubscription.unsubscribe();
	}

	getMenu() {
		this.menuSubscription = this.getPageData(this.apiName).subscribe(menu => {
			this.menu$ = menu;
		});
	}
}
