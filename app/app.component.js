System.register(['angular2/core', "./http.service", 'angular2/router', "./welcome.component"], function(exports_1, context_1) {
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
    var core_1, http_service_1, router_1, router_2, welcome_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (welcome_component_1_1) {
                welcome_component_1 = welcome_component_1_1;
            }],
        execute: function() {
            // import {AuthHttp} from "angular2-jwt";
            // import {OnInit} from 'angular2/core';
            AppComponent = (function () {
                function AppComponent() {
                }
                // constructor(public authHttp: AuthHttp) {
                //   this.jwt = localStorage.getItem('jwt');
                //   // this.decodedJwt = this.jwt && window.jwt_decode(this.jwt);
                // }
                // response: string;
                // isSignedIn: boolean;
                // constructor(private _httpService: HttpService) {}
                // ngOnInit():any {
                // 	this._httpService.isSignedIn()
                // 		.subscribe(
                // 			response => this.isSignedIn = response.isSignedIn,
                // 			error => console.log("ngOnInit error:", error)
                // 		)
                // }
                // jwtHelper: JwtHelper = new JwtHelper();
                // useJwtHelper() {
                //   var token = localStorage.getItem('id_token');
                //   console.log(
                //     this.jwtHelper.decodeToken(token),
                //     this.jwtHelper.getTokenExpirationDate(token),
                //     this.jwtHelper.isTokenExpired(token)
                //   );
                // }
                AppComponent.prototype.logout = function () {
                    console.log("Logging out!");
                    localStorage.removeItem('jwt');
                    // this.router.parent.navigateByUrl('/login');
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'sillyseason',
                        templateUrl: 'templates/app.html',
                        providers: [http_service_1.HttpService],
                        directives: [router_1.ROUTER_DIRECTIVES],
                    }),
                    router_2.RouteConfig([
                        { path: '/welcome', name: 'Welcome', component: welcome_component_1.WelcomeComponent, useAsDefault: true },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0EseUNBQXlDO1lBQ3pDLHdDQUF3QztZQWN4QztnQkFBQTtnQkF3Q0EsQ0FBQztnQkFyQ0EsMkNBQTJDO2dCQUMzQyw0Q0FBNEM7Z0JBQzVDLGtFQUFrRTtnQkFDbEUsSUFBSTtnQkFFSixvQkFBb0I7Z0JBQ3BCLHVCQUF1QjtnQkFDdkIsb0RBQW9EO2dCQUVwRCxtQkFBbUI7Z0JBQ25CLGtDQUFrQztnQkFDbEMsZ0JBQWdCO2dCQUNoQix3REFBd0Q7Z0JBQ3hELG9EQUFvRDtnQkFDcEQsTUFBTTtnQkFDTixJQUFJO2dCQUVKLDBDQUEwQztnQkFHMUMsbUJBQW1CO2dCQUNuQixrREFBa0Q7Z0JBRWxELGlCQUFpQjtnQkFDakIseUNBQXlDO2dCQUN6QyxvREFBb0Q7Z0JBQ3BELDJDQUEyQztnQkFDM0MsT0FBTztnQkFDUCxJQUFJO2dCQUVKLDZCQUFNLEdBQU47b0JBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDM0IsWUFBWSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDL0IsOENBQThDO2dCQUNoRCxDQUFDO2dCQWpERjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxhQUFhO3dCQUN2QixXQUFXLEVBQUUsb0JBQW9CO3dCQUNqQyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO3dCQUN4QixVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztxQkFDbEMsQ0FBQztvQkFFRCxvQkFBVyxDQUFDO3dCQUNaLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFDO3FCQUNwRixDQUFDOztnQ0FBQTtnQkEyQ0YsbUJBQUM7WUFBRCxDQXhDQSxBQXdDQyxJQUFBO1lBeENELHVDQXdDQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0h0dHBTZXJ2aWNlfSBmcm9tIFwiLi9odHRwLnNlcnZpY2VcIjtcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1JvdXRlQ29uZmlnfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtXZWxjb21lQ29tcG9uZW50fSBmcm9tIFwiLi93ZWxjb21lLmNvbXBvbmVudFwiO1xuLy8gaW1wb3J0IHtBdXRoSHR0cH0gZnJvbSBcImFuZ3VsYXIyLWp3dFwiO1xuLy8gaW1wb3J0IHtPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NpbGx5c2Vhc29uJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9hcHAuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbSHR0cFNlcnZpY2VdLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG59KVxuXG5AUm91dGVDb25maWcoW1xuXHR7cGF0aDogJy93ZWxjb21lJywgbmFtZTogJ1dlbGNvbWUnLCBjb21wb25lbnQ6IFdlbGNvbWVDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXG5dKVxuLy8gaW1wbGVtZW50cyBPbkluaXRcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cdGp3dDogc3RyaW5nO1xuXHRkZWNvZGVkSnd0OiBzdHJpbmc7XG5cdC8vIGNvbnN0cnVjdG9yKHB1YmxpYyBhdXRoSHR0cDogQXV0aEh0dHApIHtcblx0Ly8gICB0aGlzLmp3dCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdqd3QnKTtcblx0Ly8gICAvLyB0aGlzLmRlY29kZWRKd3QgPSB0aGlzLmp3dCAmJiB3aW5kb3cuand0X2RlY29kZSh0aGlzLmp3dCk7XG5cdC8vIH1cblxuXHQvLyByZXNwb25zZTogc3RyaW5nO1xuXHQvLyBpc1NpZ25lZEluOiBib29sZWFuO1xuXHQvLyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSHR0cFNlcnZpY2UpIHt9XG5cblx0Ly8gbmdPbkluaXQoKTphbnkge1xuXHQvLyBcdHRoaXMuX2h0dHBTZXJ2aWNlLmlzU2lnbmVkSW4oKVxuXHQvLyBcdFx0LnN1YnNjcmliZShcblx0Ly8gXHRcdFx0cmVzcG9uc2UgPT4gdGhpcy5pc1NpZ25lZEluID0gcmVzcG9uc2UuaXNTaWduZWRJbixcblx0Ly8gXHRcdFx0ZXJyb3IgPT4gY29uc29sZS5sb2coXCJuZ09uSW5pdCBlcnJvcjpcIiwgZXJyb3IpXG5cdC8vIFx0XHQpXG5cdC8vIH1cblxuXHQvLyBqd3RIZWxwZXI6IEp3dEhlbHBlciA9IG5ldyBKd3RIZWxwZXIoKTtcblxuXG5cdC8vIHVzZUp3dEhlbHBlcigpIHtcblx0Ly8gICB2YXIgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRfdG9rZW4nKTtcblxuXHQvLyAgIGNvbnNvbGUubG9nKFxuXHQvLyAgICAgdGhpcy5qd3RIZWxwZXIuZGVjb2RlVG9rZW4odG9rZW4pLFxuXHQvLyAgICAgdGhpcy5qd3RIZWxwZXIuZ2V0VG9rZW5FeHBpcmF0aW9uRGF0ZSh0b2tlbiksXG5cdC8vICAgICB0aGlzLmp3dEhlbHBlci5pc1Rva2VuRXhwaXJlZCh0b2tlbilcblx0Ly8gICApO1xuXHQvLyB9XG5cblx0bG9nb3V0KCkge1xuXHRcdGNvbnNvbGUubG9nKFwiTG9nZ2luZyBvdXQhXCIpO1xuXHQgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdqd3QnKTtcblx0ICAvLyB0aGlzLnJvdXRlci5wYXJlbnQubmF2aWdhdGVCeVVybCgnL2xvZ2luJyk7XG5cdH1cblxuXG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
