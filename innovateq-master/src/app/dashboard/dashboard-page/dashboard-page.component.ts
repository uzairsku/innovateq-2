import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {
	TotalOrders,
	TotalExpenses,
	TotalRevenue,
	TotalNewUsers,
	Blogs,
} from '../models/dashboard.model';
import { BaseComponent } from 'src/app/shared/base.component'; //Base Class

@Component({
	selector: 'app-dashboard-page',
	templateUrl: './dashboard-page.component.html',
	styleUrls: ['dashboard-page.scss'],
})
export class DashboardPageComponent
	extends BaseComponent
	implements OnInit, OnDestroy
{
	totalOrders$: Observable<TotalOrders> = new Observable();
	totalExpenses$: Observable<TotalExpenses> = new Observable();
	totalRevenue$: Observable<TotalRevenue> = new Observable();
	totalNewUsers$: Observable<TotalNewUsers> = new Observable();
	blogs$: Observable<Blogs> = new Observable();

	// Declare subscriptions
	private totalOrdersSubscription: Subscription;
	private totalExpensesSubscription: Subscription;
	private totalRevenueSubscription: Subscription;
	private totalNewUsersSubscription: Subscription;
	private blogsSubscription: Subscription;

	ngOnInit() {
		this.getDashboardData();
	}

	ngOnDestroy() {
		// Unsubscribe from all subscriptions to prevent memory leaks
		this.totalOrdersSubscription.unsubscribe();
		this.totalExpensesSubscription.unsubscribe();
		this.totalRevenueSubscription.unsubscribe();
		this.totalNewUsersSubscription.unsubscribe();
		this.blogsSubscription.unsubscribe();
	}

	private getDashboardData() {
		this.totalOrdersSubscription = this.getPageData('orders').subscribe(
			totalOrders => {
				this.totalOrders$ = totalOrders.length;
			}
		);
		this.totalExpensesSubscription = this.getPageData('dashboard', 2).subscribe(
			totalExp => {
				this.totalExpenses$ = totalExp;
			}
		);
		this.totalRevenueSubscription = this.getPageData('dashboard', 3).subscribe(
			totalRev => {
				this.totalRevenue$ = totalRev;
			}
		);
		this.totalNewUsersSubscription = this.getPageData('dashboard', 4).subscribe(
			newUser => {
				this.totalNewUsers$ = newUser;
			}
		);

		this.blogsSubscription = this.getPageData('blogs').subscribe(blogs => {
			this.blogs$ = blogs;
		});
	}
}
