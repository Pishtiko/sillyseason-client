import {Component} from 'angular2/core';
import {HttpService} from "./http.service";

@Component({
    selector: 'app',
    templateUrl: 'templates/app.html',
    providers: [HttpService],
})
export class AppComponent {
	response: string;
	constructor(private _httpService: HttpService) {}

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
