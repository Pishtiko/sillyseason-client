import {Component} from 'angular2/core';
import {HttpService} from "./http.service";
import {LeaguesComponent} from "./leagues.component";
import {AboutComponent} from "./about.component";
// import {Import} from 'angular2/core';

@Component({
	selector: 'ss-welcome',
	templateUrl: 'templates/welcome.html',
	directives: [LeaguesComponent, AboutComponent],
})

export class WelcomeComponent {
	response: string;
	leagueOrAbout: string;
	token: string;
	// jwt: string;
	// decodedJwt: string;

	// constructor(public router: Router, public http: Http, public authHttp: AuthHttp) {
	// 	this.jwt = localStorage.getItem('jwt');
	// 	this.decodedJwt = this.jwt && window.jwt_decoded(this.jwt);
	// }

	onLeagueOrAbout(leagueOrAbout: string) {
		this.leagueOrAbout = leagueOrAbout;
	}
	constructor(private _httpService: HttpService) {}
	onSignIn(event, email, password) {
		this._httpService.signIn({email: email, password: password})
			.subscribe(
				response => {
					console.log("response:", response.id_token);
					localStorage.setItem('jwt', response.id_token);
					// isSignedIn = true;
					// this.router.parent.navigateByUrl('/home');
				},
				error => console.log("SignIn error:", error)
			);
		
	}

	onLogout() {
		
	}

	onCreateTeam() {
		this.token = localStorage.getItem('jwt');

	}
}
