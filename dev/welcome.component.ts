import {Component} from 'angular2/core';

import {LeaguesComponent} from "./leagues.component";
import {AboutComponent} from "./about.component";

@Component({
	selector: 'ss-welcome',
	templateUrl: 'templates/welcome.html',
	directives: [LeaguesComponent, AboutComponent],
})

export class WelcomeComponent {
	leagueOrAbout: string;


	onLeagueOrAbout(leagueOrAbout: string) {
		this.leagueOrAbout = leagueOrAbout;
	}

	onCreateTeam() {

	}
}
