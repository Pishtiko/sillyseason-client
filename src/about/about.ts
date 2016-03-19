import {Component} from 'angular2/core';

let styles   = require('../login/login.css');
let template = require('./about.html');

@Component({
	selector: 'ss-about',
	template: template,
	styles: [ styles ],
})

export class AboutComponent {

}
