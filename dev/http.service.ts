import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Headers} from 'angular2/http';
import {ContentHeaders} from "./shared/headers";

@Injectable()

export class HttpService {
	constructor(private _http: Http) {}

	isSignedIn(): Observable<any> {
		return this._http.get('http://localhost:3001/')
			.map(res => res.json());
	}

	getLeagues(): Observable<any> {
		return this._http.get('http://localhost:3001/leagues')
			.map(res => res.json());
	}

	signIn(post: {email: string, password: string}): Observable<any> {
		const body = JSON.stringify(post);
		// let headers = new Headers();
		// headers.append('Content-Type', 'application/x-www-urlencoded');
		return this._http.post('http://localhost:3001/sessions/create', body, {headers: ContentHeaders
		}).map(res => res.json());
	}
}