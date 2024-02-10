import {
	Directive,
	ChangeDetectorRef,
	OnInit,
	OnDestroy,
	Input,
} from '@angular/core';
import { ConfigService } from './services/config.service';

@Directive()
export class BaseComponent implements OnInit, OnDestroy {
	constructor(private config?: ConfigService) {}

	ngOnInit(): void {
		console.debug('Super ngOnInit called');
	}

	ngOnDestroy(): void {
		console.debug('Super destroy called');
	}

	protected getPageData(apiName: string, id?: number): any {
		return this.config.getSettings(apiName, id);
	}

	protected getPageDataFromJSONServer(apiName: string, id?: number): any {
		return this.config.getDataFromJsonServer(apiName, id);
	}

	protected trackByFn(index: number, item: any): any {
		return item.key;
	}
}
