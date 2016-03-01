import {Component} from 'angular2/core';
import {HttpService} from "./http.service";
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteConfig} from 'angular2/router';
import {WelcomeComponent} from "./welcome.component";
import {AboutComponent} from "./about.component";

@Component({
    selector: 'sillyseason',
    templateUrl: 'templates/app.html',
    providers: [HttpService],
    directives: [ROUTER_DIRECTIVES],
})

@RouteConfig([
	{path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true},
	{path: '/about', name: 'About', component: AboutComponent},
])

export class AppComponent {
	response: string;
	constructor(private _httpService: HttpService) {}

	onSignIn(email: string, password: string) {

	}

	onIsSignedIn() {
		// check if user is signed in, return false if signed in
		this._httpService.isSignedIn()
			.subscribe(
				response => this.response = response,
				error => console.log("onIsSignedIn error:", error)
			)
	}


	onGetPosts() {
		this._httpService.getPosts()
			.subscribe(
				response => this.response = response,
				error => console.log("onGetPosts error:", error)
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





