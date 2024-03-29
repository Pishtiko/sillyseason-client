import { Component } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import { Http } from 'angular2/http';
import { ContentHeaders } from '../common/headers';

let styles   = require('./signup.css');
let template = require('./signup.html');

@Component({
  selector: 'signup',
  directives: [ RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES ],
  template: template,
  styles: [ styles ]
})
export class Signup {
  constructor(public router: Router, public http: Http) {
  }

  signup(event, name, email, password) {
    event.preventDefault();
    let body = JSON.stringify({ name, email, password });
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
          console.log(error);
        }
      );
  }
// error.text()

  login(event) {
    event.preventDefault();
    this.router.parent.navigateByUrl('/login');
  }

}
