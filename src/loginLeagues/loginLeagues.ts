import { Component } from 'angular2/core';
import { HttpService } from '../common/http.service';

let styles   = require('../css/style.css');
let template = require('./loginLeagues.html');

@Component({
	selector: 'ss-leagues',
	template: template,
	providers: [HttpService],
	styles: [ styles ],
})

export class LeaguesComponent {
	leagues: string;

	constructor(private _httpService: HttpService) {}
	ngOnInit(): any {
		this._httpService.getLeagues()
			.subscribe(
				response => this.leagues = response,
				error => console.log('ngOnInit error:', error)
			);
	}
	onSelectLeague(league) {
		console.log('onSelectLeague', league);
	}


}
