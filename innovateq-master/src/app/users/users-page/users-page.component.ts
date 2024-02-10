import { Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/base.component';
import { Users } from '../models/users.models';

@Component({
	selector: 'app-users-page',
	templateUrl: './users-page.component.html',
	styleUrls: ['users-page.scss'],
})
export class UsersPageComponent extends BaseComponent implements OnInit {
	userData$: Observable<Users> = new Observable();
	private userDataSubscription: Subscription;
	totalUserCount = 0;

	ngOnInit(): void {
		this.getUserData('users');
	}

	ngOnDestroy(): void {
		this.userDataSubscription.unsubscribe();
	}

	getUserData(database: string): void {
		this.userDataSubscription = this.getPageData(database).subscribe(users => {
			this.userData$ = users;
			this.totalUserCount = users.length;
		});
	}
}
