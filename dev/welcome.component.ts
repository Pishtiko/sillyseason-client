import {Component} from 'angular2/core';
import {HttpService} from "./http.service";
import {LeaguesComponent} from "./leagues.component";
import {AboutComponent} from "./about.component";

@Component({
	selector: 'ss-welcome',
	templateUrl: 'templates/welcome.html',
	directives: [LeaguesComponent, AboutComponent],
})

export class WelcomeComponent {
	response: string;
	leagueOrAbout: string;


	onLeagueOrAbout(leagueOrAbout: string) {
		this.leagueOrAbout = leagueOrAbout;
	}
	constructor(private _httpService: HttpService) {}
	onSignIn(email: string, password: string) {
		this._httpService.signIn({email: email, password: password})
			.subscribe(
				response => this.response = response,
				error => console.log("onSignIn error:", error)
			);
		
	}

	onLogout() {
		
	}

	onCreateTeam() {

	}
}
