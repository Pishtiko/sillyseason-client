import { Component } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import { Http, Headers } from 'angular2/http';
import { ContentHeaders } from '../common/headers';
import { LeaguesComponent } from '../loginLeagues/loginLeagues';
import { AboutComponent } from '../about/about';

let styles  = require('./login.css');
let template    = require('./login.html');

@Component({
  selector: 'login',
  directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES, LeaguesComponent, AboutComponent],
  template: template,
  styles: [ styles ],
})
export class Login {
  leagueOrAbout: string;
  createTeam = true;

  constructor(public router: Router, public http: Http) {}

  onLeagueOrAbout(leagueOrAbout: string) {
    this.leagueOrAbout = leagueOrAbout;
  }

  onSignIn(event, email, password) {
    event.preventDefault();
    let body = JSON.stringify({ email, password });
    this.http.post('http://localhost:3001/sessions/create', body, { headers: ContentHeaders })
      .subscribe(
        response => {
          localStorage.setItem('jwt', response.json().id_token);
          this.router.parent.navigateByUrl('/home');
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }

  onCreateTeam(event) {
    event.preventDefault();
    this.createTeam = !this.createTeam;
    // this.router.parent.navigateByUrl('/signup');
  }

  onCreateLeague(event, newUser) {
    event.preventDefault();
    console.log(newUser);
    let body = JSON.stringify(newUser);
    this.http.post('http://localhost:3001/users', body, { headers: ContentHeaders })
      .subscribe(
        response => {
          console.log('+++ response:', response.json().id_token);
          // var token = response._body;
          // console.log("jwt_decode(response):", jwt_decode(response));
          localStorage.setItem('jwt', response.json().id_token);
          this.router.parent.navigateByUrl('/home');
        },
        error => {
          // alert(error.text());
          // Create more userfriendly feedback for failed user creation
          console.log(error);
        }
      );
  }
}
