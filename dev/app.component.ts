import {Component} from 'angular2/core';
import {HttpService} from "./http.service";
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteConfig} from 'angular2/router';
import {WelcomeComponent} from "./welcome.component";
// import {AuthHttp} from "angular2-jwt";
// import {OnInit} from 'angular2/core';

@Component({
    selector: 'sillyseason',
    templateUrl: 'templates/app.html',
    providers: [HttpService],
    directives: [ROUTER_DIRECTIVES],
})

@RouteConfig([
	{path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true},
])
// implements OnInit

export class AppComponent {
	jwt: string;
	decodedJwt: string;
	// constructor(public authHttp: AuthHttp) {
	//   this.jwt = localStorage.getItem('jwt');
	//   // this.decodedJwt = this.jwt && window.jwt_decode(this.jwt);
	// }

	// response: string;
	// isSignedIn: boolean;
	// constructor(private _httpService: HttpService) {}

	// ngOnInit():any {
	// 	this._httpService.isSignedIn()
	// 		.subscribe(
	// 			response => this.isSignedIn = response.isSignedIn,
	// 			error => console.log("ngOnInit error:", error)
	// 		)
	// }

	// jwtHelper: JwtHelper = new JwtHelper();


	// useJwtHelper() {
	//   var token = localStorage.getItem('id_token');

	//   console.log(
	//     this.jwtHelper.decodeToken(token),
	//     this.jwtHelper.getTokenExpirationDate(token),
	//     this.jwtHelper.isTokenExpired(token)
	//   );
	// }

	logout() {
		console.log("Logging out!");
	  localStorage.removeItem('jwt');
	  // this.router.parent.navigateByUrl('/login');
	}


}



















