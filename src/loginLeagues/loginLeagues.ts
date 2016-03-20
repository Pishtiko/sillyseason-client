import { Component } from 'angular2/core';
import { HttpService } from '../common/http.service';
import { OrderByPipe } from '../common/orderByPipe';

let styles   = require('../login/login.css');
let template = require('./loginLeagues.html');

@Component({
	selector: 'ss-leagues',
	template: template,
	providers: [ HttpService ],
	styles: [ styles ],
	pipes: [ OrderByPipe ],
})



export class LeaguesComponent {
	leagues: string;
	selectedLeague = 1; // change to null after development


	constructor(private _httpService: HttpService) {}
	ngOnInit(): any {
		this._httpService.getLeagues()
			.subscribe(
				response => this.leagues = response,
				error => console.log('ngOnInit error:', error)
			);
	}
	onSelectLeague(league) {
		if (this.selectedLeague === league) {
			this.selectedLeague = null;
		} else {
			this.selectedLeague = league;
		}
	}

}
