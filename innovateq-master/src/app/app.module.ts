import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

// Components
import { AppComponent } from './app.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { NavigationComponent } from './toolbar/toolbar.component';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from './users/users.module';
import { BlogsModule } from './blogs/blogs.module';
import { DashboardModule } from './dashboard/dashboard.module';

// Services
import { ConfigService } from './shared/services/config.service';
import { InMemoryDataService } from './shared/services/in-memory-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [AppComponent, NavigationComponent, NavmenuComponent],
	imports: [
		UsersModule,
		AppRoutingModule,
		BrowserModule,
		BlogsModule,
		DashboardModule,
		HttpClientModule,
		ReactiveFormsModule,
		MatIconModule,
		MatMenuModule,
		MatToolbarModule,
		MatListModule,
		// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
		HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
			dataEncapsulation: false,
			passThruUnknownUrl: true,
		}),
		BrowserAnimationsModule,
	],
	providers: [ConfigService],
	bootstrap: [AppComponent],
})
export class AppModule {}
