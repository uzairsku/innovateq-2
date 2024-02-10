import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
	providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const orders = [
			{
				order_id: 1001,
				customer_name: 'ABC Energy Corporation',
				items: [
					{
						item_id: 'OIL123',
						item_name: 'Crude Oil (WTI)',
						quantity: 1000,
						price_per_unit: 60.5,
						unit: 'barrel',
					},
					{
						item_id: 'NG456',
						item_name: 'Natural Gas (Henry Hub)',
						quantity: 50000,
						price_per_unit: 3.25,
						unit: 'MMBtu',
					},
				],
				total_amount: 90000.0,
				order_date: '2024-02-09',
			},
			{
				order_id: 1002,
				customer_name: 'XYZ Petroleum Ltd.',
				items: [
					{
						item_id: 'GAS789',
						item_name: 'Liquefied Natural Gas (LNG)',
						quantity: 20000,
						price_per_unit: 8.75,
						unit: 'MMBtu',
					},
					{
						item_id: 'OIL456',
						item_name: 'Diesel Fuel',
						quantity: 5000,
						price_per_unit: 1.5,
						unit: 'gallon',
					},
				],
				total_amount: 127500.0,
				order_date: '2024-02-09',
			},
		];

		const blogs = [
			{
				title: 'Lorem ipsum dolor sit amet',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper ullamcorper tempor. Praesent euismod fringilla nulla nec bibendum. Cras ut volutpat lectus.',
				imageUrl: '../../../assets/images/local-grocery-store.png',
				date: '22 July 2020',
				author: 'Alex Paul',
			},
			{
				title: 'Lorem ipsum dolor sit amet',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper ullamcorper tempor. Praesent euismod fringilla nulla nec bibendum. Cras ut volutpat lectus.',
				imageUrl: '../../../assets/images/local-grocery-store.png',
				date: '22 July 2020',
				author: 'Alex Paul',
			},
			{
				title: 'Lorem ipsum dolor sit amet',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper ullamcorper tempor. Praesent euismod fringilla nulla nec bibendum. Cras ut volutpat lectus.',
				imageUrl: '../../../assets/images/local-grocery-store.png',
				date: '22 July 2020',
				author: 'Alex Paul',
			},
			{
				title: 'Lorem ipsum dolor sit amet',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper ullamcorper tempor. Praesent euismod fringilla nulla nec bibendum. Cras ut volutpat lectus.',
				imageUrl: '../../../assets/images/local-grocery-store.png',
				date: '22 July 2020',
				author: 'Alex Paul',
			},
			// Add more blog objects as needed
		];

		const notifications = [
			{
				id: 1,
				type: 'info',
				message: 'Welcome to our application! Feel free to explore.',
				timestamp: '2024-02-10T08:00:00Z',
			},
			{
				id: 2,
				type: 'warning',
				message:
					'Your session will expire in 5 minutes. Please save your work.',
				timestamp: '2024-02-10T08:15:00Z',
			},
			{
				id: 3,
				type: 'error',
				message: 'Failed to save changes. Please try again later.',
				timestamp: '2024-02-10T09:30:00Z',
			},
		];

		const dashboard = [
			{ id: 2, count: 1000, name: 'Total Expenses' },
			{ id: 3, count: 2000, name: 'Total Revenue' },
			{ id: 4, count: 5, name: 'New Users' },
		];
		const menu = [
			{ id: 1, name: 'Home', link: '/dashboard', icon: 'home' },
			{ id: 2, name: 'Users', link: '/users', icon: 'person' },
			{ id: 3, name: 'Blogs', link: '/blogs', icon: 'article' },
		];

		const users = [
			{
				shortName: 'LE',
				name: 'Lorem Epsum',
				description: 'Description',
				imageUrl1: '../../../assets/images/ellipse1.png',
				imageUrl2: '../../../assets/images/group-1720.png',
				Designation: 'Contractor',
				JoiningDate: '12 July 2020',
			},
			{
				shortName: 'LE',
				name: 'Lorem Epsum',
				description: 'Description',
				imageUrl1: '../../../assets/images/ellipse2.png',
				imageUrl2: '../../../assets/images/group-1720.png',
				Designation: 'Contractor',
				JoiningDate: '12 July 2020',
			},
			// Add more Users as needed
		];

		return {
			menu,
			dashboard,
			orders,
			blogs,
			notifications,
			users,
		};
	}
}
