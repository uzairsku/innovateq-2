import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class ConfigService {
	config = '';
	jsonServerUrl = 'https://my-json-server.typicode.com/uzairsku/InnovateqApi2';

	constructor(private http: HttpClient) {}

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: Error): Observable<T> => {
			console.error(error);
			console.log(`${operation} failed: ${error.message}`);
			return of(result as T);
		};
	}

	getConfig() {
		return this.config;
	}

	getSettings(apiName: string, id?: number): Observable<any> {
		const url = id ? `api/${apiName}/${id}` : `api/${apiName}`;
		return this.http.get<any>(url).pipe(catchError(this.handleError('', [])));
	}

	getDataFromJsonServer(apiName: string, id?: number): Observable<any> {
		const url = id
			? `${this.jsonServerUrl}/${apiName}/${id}`
			: `${this.jsonServerUrl}/${apiName}/`;
		return this.http.get<any>(url).pipe(catchError(this.handleError('', [])));
	}
}
