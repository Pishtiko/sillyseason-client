import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { Http, Headers } from 'angular2/http';
import { AuthHttp } from 'angular2-jwt';
import { Router } from 'angular2/router';
import { JoinLeague } from '../joinLeague/joinLeague';
import { OnInit, AfterViewInit } from 'angular2/core';
// import { AfterContentInit } from 'angular2/core';

// import { Observable } from 'rxjs/Rx';
// import { HttpService } from '../common/http.service';

let styles = require('./home.css');
let template = require('./home.html');


@Component({
  selector: 'home',
  directives: [ CORE_DIRECTIVES, JoinLeague ],
  template: template,
  styles: [ styles ],
  // providers: [ HttpService ],
})
export class Home implements OnInit, AfterViewInit {
  jwt: string;
  decodedJwt: string;

  // jwt: string;
  // decodedJwt: string;
  response: string;
  api: string;
  hasLeague = false;

  constructor(public router: Router, public http: Http, public authHttp: AuthHttp) {
    this.jwt = localStorage.getItem('jwt');
    this.decodedJwt = this.jwt && window.jwt_decode(this.jwt);
    console.log('constructor in home.ts has run', this.decodedJwt);
  }

  onLogout() {
    localStorage.removeItem('jwt');
    this.router.parent.navigateByUrl('/login');
  }

  ngAfterViewInit() {
    console.log('in AfterViewInit - home.ts');
  }
  // constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.jwt = localStorage.getItem('jwt');
    this.decodedJwt = this.jwt && window.jwt_decode(this.jwt);
    // if (this.decodedJwt['league_id']) this.hasLeague = true;
    console.log('ngAfterContentInit', this.decodedJwt);
  }

  refresh() {
    console.log('this should load the jwt info');
  }



  callAnonymousApi() {
    this._callApi('Anonymous', 'http://localhost:3001/api/random-quote');
  }

  callSecuredApi() {
    this._callApi('Secured', 'http://localhost:3001/api/protected/random-quote');
  }

  _callApi(type, url) {
    this.response = null;
    if (type === 'Anonymous') {
      // For non-protected routes, just use Http
      this.http.get(url)
        .subscribe(
          response => this.response = response.text(),
          error => this.response = error.text()
        );
    }
    if (type === 'Secured') {
      // For protected routes, use AuthHttp
      this.authHttp.get(url)
        .subscribe(
          response => this.response = response.text(),
          error => this.response = error.text()
        );
    }
  }
}
