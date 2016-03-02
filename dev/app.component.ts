import {Component} from 'angular2/core';
import {HttpService} from "./http.service";
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteConfig} from 'angular2/router';
import {OnInit} from 'angular2/core';
import {WelcomeComponent} from "./welcome.component";


@Component({
    selector: 'sillyseason',
    templateUrl: 'templates/app.html',
    providers: [HttpService],
    directives: [ROUTER_DIRECTIVES],
})

@RouteConfig([
	{path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true},
])


export class AppComponent implements OnInit {
	response: string;
	isSignedIn: boolean;
	constructor(private _httpService: HttpService) {}

	ngOnInit():any {
		this._httpService.isSignedIn()
			.subscribe(
				response => this.isSignedIn = response[0].isSignedIn,
				error => console.log("ngOnInit error:", error)
			)
	}


	onSignIn(email: string, password: string) {

	}

	onLogout() {
		
	}
	
	onIsSignedIn() {
		this._httpService.isSignedIn()
			.subscribe(
				response => this.response = response,
				error => console.log("onIsSignedIn error:", error)
			)
	}


	onPost(title: string, body: string, userId: string) {
		this._httpService.createPost({title: title, body: body, userId: +userId})
			.subscribe(
				response => this.response = response,
				error => console.log("onPost error:", error)
			);
	}
}







