import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {HttpService} from "./http.service";

@Component({
	selector: 'ss-welcome',
	templateUrl: 'templates/welcome.html',
})

 // implements OnInit
export class WelcomeComponent {

	response: string;
	constructor(private _httpService: HttpService) {}

	// ngOnInit():any {
	// 	this._httpService.isSignedIn()
	// 		.subscribe(
	// 			response => this.response = response,
	// 			error => console.log("onGetPosts error:", error)
	// 		)
	// }
}