import {Component} from 'angular2/core';
import {HttpService} from "./http.service";

@Component({
	selector: 'ss-leagues',
	templateUrl: 'templates/leagues.html',
})

export class LeaguesComponent {
	leagues: string;

	constructor(private _httpService: HttpService) {}
	ngOnInit():any {
		this._httpService.getLeagues()
			.subscribe(
				response => this.leagues = response,
				error => console.log("ngOnInit error:", error)
			)
	}
	onSelectLeague(league) {
		console.log("onSelectLeague", league);
	}


}

// response => console.log("ngOnInit response:", response[0].league.league_name),
