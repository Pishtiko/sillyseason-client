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
            WelcomeComponent = (function () {
                function WelcomeComponent(_httpService) {
                    this._httpService = _httpService;
                }
                WelcomeComponent.prototype.onLeagueOrAbout = function (leagueOrAbout) {
                    this.leagueOrAbout = leagueOrAbout;
                };
                WelcomeComponent.prototype.onSignIn = function (email, password) {
                    var _this = this;
                    this._httpService.signIn({ email: email, password: password })
                        .subscribe(function (response) { return _this.response = response; }, function (error) { return console.log("onSignIn error:", error); });
                };
                WelcomeComponent.prototype.onLogout = function () {
                };
                WelcomeComponent.prototype.onCreateTeam = function () {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBUUMsMEJBQW9CLFlBQXlCO29CQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtnQkFBRyxDQUFDO2dCQUhqRCwwQ0FBZSxHQUFmLFVBQWdCLGFBQXFCO29CQUNwQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztnQkFDcEMsQ0FBQztnQkFFRCxtQ0FBUSxHQUFSLFVBQVMsS0FBYSxFQUFFLFFBQWdCO29CQUF4QyxpQkFPQztvQkFOQSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxDQUFDO3lCQUMxRCxTQUFTLENBQ1QsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsRUFBeEIsQ0FBd0IsRUFDcEMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxFQUFyQyxDQUFxQyxDQUM5QyxDQUFDO2dCQUVKLENBQUM7Z0JBRUQsbUNBQVEsR0FBUjtnQkFFQSxDQUFDO2dCQUVELHVDQUFZLEdBQVo7Z0JBRUEsQ0FBQztnQkE5QkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsWUFBWTt3QkFDdEIsV0FBVyxFQUFFLHdCQUF3Qjt3QkFDckMsVUFBVSxFQUFFLENBQUMsb0NBQWdCLEVBQUUsZ0NBQWMsQ0FBQztxQkFDOUMsQ0FBQzs7b0NBQUE7Z0JBMkJGLHVCQUFDO1lBQUQsQ0F6QkEsQUF5QkMsSUFBQTtZQXpCRCwrQ0F5QkMsQ0FBQSIsImZpbGUiOiJ3ZWxjb21lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SHR0cFNlcnZpY2V9IGZyb20gXCIuL2h0dHAuc2VydmljZVwiO1xuaW1wb3J0IHtMZWFndWVzQ29tcG9uZW50fSBmcm9tIFwiLi9sZWFndWVzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBYm91dENvbXBvbmVudH0gZnJvbSBcIi4vYWJvdXQuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3NzLXdlbGNvbWUnLFxuXHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy93ZWxjb21lLmh0bWwnLFxuXHRkaXJlY3RpdmVzOiBbTGVhZ3Vlc0NvbXBvbmVudCwgQWJvdXRDb21wb25lbnRdLFxufSlcblxuZXhwb3J0IGNsYXNzIFdlbGNvbWVDb21wb25lbnQge1xuXHRyZXNwb25zZTogc3RyaW5nO1xuXHRsZWFndWVPckFib3V0OiBzdHJpbmc7XG5cblxuXHRvbkxlYWd1ZU9yQWJvdXQobGVhZ3VlT3JBYm91dDogc3RyaW5nKSB7XG5cdFx0dGhpcy5sZWFndWVPckFib3V0ID0gbGVhZ3VlT3JBYm91dDtcblx0fVxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSHR0cFNlcnZpY2UpIHt9XG5cdG9uU2lnbkluKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcblx0XHR0aGlzLl9odHRwU2VydmljZS5zaWduSW4oe2VtYWlsOiBlbWFpbCwgcGFzc3dvcmQ6IHBhc3N3b3JkfSlcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdHJlc3BvbnNlID0+IHRoaXMucmVzcG9uc2UgPSByZXNwb25zZSxcblx0XHRcdFx0ZXJyb3IgPT4gY29uc29sZS5sb2coXCJvblNpZ25JbiBlcnJvcjpcIiwgZXJyb3IpXG5cdFx0XHQpO1xuXHRcdFxuXHR9XG5cblx0b25Mb2dvdXQoKSB7XG5cdFx0XG5cdH1cblxuXHRvbkNyZWF0ZVRlYW0oKSB7XG5cblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
