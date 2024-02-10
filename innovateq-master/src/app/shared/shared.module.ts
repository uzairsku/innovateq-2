import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// MAT controls
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { PageToolbarComponent } from '../page-toolbar/page-toolbar.component';

@NgModule({
	declarations: [PageToolbarComponent],
	imports: [CommonModule],
	exports: [
		PageToolbarComponent,
		MatIconModule,
		MatToolbarModule,
		MatMenuModule,
		MatTableModule,
		MatButtonModule,
	],
})
export class SharedModule {}
