import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { UsersPageComponent } from './users-page/users-page.component';

import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [UsersPageComponent],
	imports: [UsersRoutingModule, SharedModule, CommonModule],
})
export class UsersModule {}
