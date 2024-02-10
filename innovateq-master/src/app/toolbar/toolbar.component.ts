import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ConfigService } from '../shared/services/config.service';
import { BaseComponent } from '../shared/base.component';
import { Observable, Subscription } from 'rxjs';
import { Users } from '../users/models/users.models';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss'],
})
export class NavigationComponent extends BaseComponent implements OnInit {
	notificationCount = 0;
	menuOpen: boolean;
	username: string;
	userName = 'UZ';

	showPopup = false;
	showUserInfo = false;

	userData$: Observable<Users> = new Observable();
	private notificationCountSubscription: Subscription;
	private usersSubscription: Subscription;

	ngOnInit() {
		this.menuOpen = false;

		this.fetchDate();
	}
	fetchDate() {
		this.notificationCount = this.getPageData('notifications');
		this.notificationCountSubscription = this.getPageData(
			'notifications'
		).subscribe(notification => {
			this.notificationCount = notification.length;
		});
		this.usersSubscription = this.getPageData('users').subscribe(users => {
			this.userData$ = users;
			this.username = this.userData$[0]?.shortName;
		});
	}
	ngOnDestroy(): void {
		this.notificationCountSubscription.unsubscribe();
		this.usersSubscription.unsubscribe();
	}
	toggleMenu(status: boolean) {
		this.menuOpen = status;
	}

	togglePopup() {
		this.showPopup = !this.showPopup;
		this.showUserInfo = false;
	}

	toggleUserInfo() {
		this.showUserInfo = !this.showUserInfo;
		this.showPopup = false;
	}
}
