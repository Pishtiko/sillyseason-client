System.register(['angular2/core', "./http.service", "./leagues.component", "./about.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_service_1, leagues_component_1, about_component_1;
    var WelcomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (leagues_component_1_1) {
                leagues_component_1 = leagues_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            }],
        execute: function() {
            // import {Import} from 'angular2/core';
            WelcomeComponent = (function () {
                function WelcomeComponent(_httpService) {
                    this._httpService = _httpService;
                }
                // jwt: string;
                // decodedJwt: string;
                // constructor(public router: Router, public http: Http, public authHttp: AuthHttp) {
                // 	this.jwt = localStorage.getItem('jwt');
                // 	this.decodedJwt = this.jwt && window.jwt_decoded(this.jwt);
                // }
                WelcomeComponent.prototype.onLeagueOrAbout = function (leagueOrAbout) {
                    this.leagueOrAbout = leagueOrAbout;
                };
                WelcomeComponent.prototype.onSignIn = function (event, email, password) {
                    this._httpService.signIn({ email: email, password: password })
                        .subscribe(function (response) {
                        console.log("response:", response.id_token);
                        localStorage.setItem('jwt', response.id_token);
                        // isSignedIn = true;
                        // this.router.parent.navigateByUrl('/home');
                    }, function (error) { return console.log("SignIn error:", error); });
                };
                WelcomeComponent.prototype.onLogout = function () {
                };
                WelcomeComponent.prototype.onCreateTeam = function () {
                    this.token = localStorage.getItem('jwt');
                };
                WelcomeComponent = __decorate([
                    core_1.Component({
                        selector: 'ss-welcome',
                        templateUrl: 'templates/welcome.html',
                        directives: [leagues_component_1.LeaguesComponent, about_component_1.AboutComponent],
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HttpService])
                ], WelcomeComponent);
                return WelcomeComponent;
            }());
            exports_1("WelcomeComponent", WelcomeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUEsd0NBQXdDO1lBUXhDO2dCQWVDLDBCQUFvQixZQUF5QjtvQkFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7Z0JBQUcsQ0FBQztnQkFYakQsZUFBZTtnQkFDZixzQkFBc0I7Z0JBRXRCLHFGQUFxRjtnQkFDckYsMkNBQTJDO2dCQUMzQywrREFBK0Q7Z0JBQy9ELElBQUk7Z0JBRUosMENBQWUsR0FBZixVQUFnQixhQUFxQjtvQkFDcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7Z0JBQ3BDLENBQUM7Z0JBRUQsbUNBQVEsR0FBUixVQUFTLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUTtvQkFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUMsQ0FBQzt5QkFDMUQsU0FBUyxDQUNULFVBQUEsUUFBUTt3QkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQzVDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDL0MscUJBQXFCO3dCQUNyQiw2Q0FBNkM7b0JBQzlDLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxFQUFuQyxDQUFtQyxDQUM1QyxDQUFDO2dCQUVKLENBQUM7Z0JBRUQsbUNBQVEsR0FBUjtnQkFFQSxDQUFDO2dCQUVELHVDQUFZLEdBQVo7b0JBQ0MsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUUxQyxDQUFDO2dCQTNDRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixXQUFXLEVBQUUsd0JBQXdCO3dCQUNyQyxVQUFVLEVBQUUsQ0FBQyxvQ0FBZ0IsRUFBRSxnQ0FBYyxDQUFDO3FCQUM5QyxDQUFDOztvQ0FBQTtnQkF3Q0YsdUJBQUM7WUFBRCxDQXRDQSxBQXNDQyxJQUFBO1lBdENELCtDQXNDQyxDQUFBIiwiZmlsZSI6IndlbGNvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtIdHRwU2VydmljZX0gZnJvbSBcIi4vaHR0cC5zZXJ2aWNlXCI7XG5pbXBvcnQge0xlYWd1ZXNDb21wb25lbnR9IGZyb20gXCIuL2xlYWd1ZXMuY29tcG9uZW50XCI7XG5pbXBvcnQge0Fib3V0Q29tcG9uZW50fSBmcm9tIFwiLi9hYm91dC5jb21wb25lbnRcIjtcbi8vIGltcG9ydCB7SW1wb3J0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3Mtd2VsY29tZScsXG5cdHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3dlbGNvbWUuaHRtbCcsXG5cdGRpcmVjdGl2ZXM6IFtMZWFndWVzQ29tcG9uZW50LCBBYm91dENvbXBvbmVudF0sXG59KVxuXG5leHBvcnQgY2xhc3MgV2VsY29tZUNvbXBvbmVudCB7XG5cdHJlc3BvbnNlOiBzdHJpbmc7XG5cdGxlYWd1ZU9yQWJvdXQ6IHN0cmluZztcblx0dG9rZW46IHN0cmluZztcblx0Ly8gand0OiBzdHJpbmc7XG5cdC8vIGRlY29kZWRKd3Q6IHN0cmluZztcblxuXHQvLyBjb25zdHJ1Y3RvcihwdWJsaWMgcm91dGVyOiBSb3V0ZXIsIHB1YmxpYyBodHRwOiBIdHRwLCBwdWJsaWMgYXV0aEh0dHA6IEF1dGhIdHRwKSB7XG5cdC8vIFx0dGhpcy5qd3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnand0Jyk7XG5cdC8vIFx0dGhpcy5kZWNvZGVkSnd0ID0gdGhpcy5qd3QgJiYgd2luZG93Lmp3dF9kZWNvZGVkKHRoaXMuand0KTtcblx0Ly8gfVxuXG5cdG9uTGVhZ3VlT3JBYm91dChsZWFndWVPckFib3V0OiBzdHJpbmcpIHtcblx0XHR0aGlzLmxlYWd1ZU9yQWJvdXQgPSBsZWFndWVPckFib3V0O1xuXHR9XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwU2VydmljZSkge31cblx0b25TaWduSW4oZXZlbnQsIGVtYWlsLCBwYXNzd29yZCkge1xuXHRcdHRoaXMuX2h0dHBTZXJ2aWNlLnNpZ25Jbih7ZW1haWw6IGVtYWlsLCBwYXNzd29yZDogcGFzc3dvcmR9KVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0cmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwicmVzcG9uc2U6XCIsIHJlc3BvbnNlLmlkX3Rva2VuKTtcblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnand0JywgcmVzcG9uc2UuaWRfdG9rZW4pO1xuXHRcdFx0XHRcdC8vIGlzU2lnbmVkSW4gPSB0cnVlO1xuXHRcdFx0XHRcdC8vIHRoaXMucm91dGVyLnBhcmVudC5uYXZpZ2F0ZUJ5VXJsKCcvaG9tZScpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnJvciA9PiBjb25zb2xlLmxvZyhcIlNpZ25JbiBlcnJvcjpcIiwgZXJyb3IpXG5cdFx0XHQpO1xuXHRcdFxuXHR9XG5cblx0b25Mb2dvdXQoKSB7XG5cdFx0XG5cdH1cblxuXHRvbkNyZWF0ZVRlYW0oKSB7XG5cdFx0dGhpcy50b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdqd3QnKTtcblxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
