import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [DashboardPageComponent],
	imports: [DashboardRoutingModule, SharedModule, CommonModule],
})
export class DashboardModule {}
