System.register(['angular2/core', "./http.service", 'angular2/router', "./welcome.component", "./about.component"], function(exports_1, context_1) {
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
    var core_1, http_service_1, router_1, router_2, welcome_component_1, about_component_1;
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
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_httpService) {
                    this._httpService = _httpService;
                }
                AppComponent.prototype.onSignIn = function (email, password) {
                };
                AppComponent.prototype.onIsSignedIn = function () {
                    var _this = this;
                    // check if user is signed in, return false if signed in
                    this._httpService.isSignedIn()
                        .subscribe(function (response) { return _this.response = response; }, function (error) { return console.log("onIsSignedIn error:", error); });
                };
                AppComponent.prototype.onGetPosts = function () {
                    var _this = this;
                    this._httpService.getPosts()
                        .subscribe(function (response) { return _this.response = response; }, function (error) { return console.log("onGetPosts error:", error); });
                };
                AppComponent.prototype.onPost = function (title, body, userId) {
                    var _this = this;
                    this._httpService.createPost({ title: title, body: body, userId: +userId })
                        .subscribe(function (response) { return _this.response = response; }, function (error) { return console.log("onPost error:", error); });
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
                        { path: '/about', name: 'About', component: about_component_1.AboutComponent },
                    ]), 
                    __metadata('design:paramtypes', [http_service_1.HttpService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbUJBO2dCQUVDLHNCQUFvQixZQUF5QjtvQkFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7Z0JBQUcsQ0FBQztnQkFFakQsK0JBQVEsR0FBUixVQUFTLEtBQWEsRUFBRSxRQUFnQjtnQkFFeEMsQ0FBQztnQkFFRCxtQ0FBWSxHQUFaO29CQUFBLGlCQU9DO29CQU5BLHdEQUF3RDtvQkFDeEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUU7eUJBQzVCLFNBQVMsQ0FDVCxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxFQUF4QixDQUF3QixFQUNwQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsS0FBSyxDQUFDLEVBQXpDLENBQXlDLENBQ2xELENBQUE7Z0JBQ0gsQ0FBQztnQkFHRCxpQ0FBVSxHQUFWO29CQUFBLGlCQU1DO29CQUxBLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO3lCQUMxQixTQUFTLENBQ1QsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsRUFBeEIsQ0FBd0IsRUFDcEMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxFQUF2QyxDQUF1QyxDQUNoRCxDQUFBO2dCQUNILENBQUM7Z0JBRUQsNkJBQU0sR0FBTixVQUFPLEtBQWEsRUFBRSxJQUFZLEVBQUUsTUFBYztvQkFBbEQsaUJBTUM7b0JBTEEsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFDLENBQUM7eUJBQ3ZFLFNBQVMsQ0FDVCxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxFQUF4QixDQUF3QixFQUNwQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxFQUFuQyxDQUFtQyxDQUM1QyxDQUFDO2dCQUNKLENBQUM7Z0JBNUNGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFdBQVcsRUFBRSxvQkFBb0I7d0JBQ2pDLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7d0JBQ3hCLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3FCQUNsQyxDQUFDO29CQUVELG9CQUFXLENBQUM7d0JBQ1osRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUM7d0JBQ3BGLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFDO3FCQUMxRCxDQUFDOztnQ0FBQTtnQkFtQ0YsbUJBQUM7WUFBRCxDQWpDQSxBQWlDQyxJQUFBO1lBakNELHVDQWlDQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0h0dHBTZXJ2aWNlfSBmcm9tIFwiLi9odHRwLnNlcnZpY2VcIjtcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1JvdXRlQ29uZmlnfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtXZWxjb21lQ29tcG9uZW50fSBmcm9tIFwiLi93ZWxjb21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBYm91dENvbXBvbmVudH0gZnJvbSBcIi4vYWJvdXQuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2lsbHlzZWFzb24nLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2FwcC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtIdHRwU2VydmljZV0sXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbn0pXG5cbkBSb3V0ZUNvbmZpZyhbXG5cdHtwYXRoOiAnL3dlbGNvbWUnLCBuYW1lOiAnV2VsY29tZScsIGNvbXBvbmVudDogV2VsY29tZUNvbXBvbmVudCwgdXNlQXNEZWZhdWx0OiB0cnVlfSxcblx0e3BhdGg6ICcvYWJvdXQnLCBuYW1lOiAnQWJvdXQnLCBjb21wb25lbnQ6IEFib3V0Q29tcG9uZW50fSxcbl0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXHRyZXNwb25zZTogc3RyaW5nO1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSHR0cFNlcnZpY2UpIHt9XG5cblx0b25TaWduSW4oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuXG5cdH1cblxuXHRvbklzU2lnbmVkSW4oKSB7XG5cdFx0Ly8gY2hlY2sgaWYgdXNlciBpcyBzaWduZWQgaW4sIHJldHVybiBmYWxzZSBpZiBzaWduZWQgaW5cblx0XHR0aGlzLl9odHRwU2VydmljZS5pc1NpZ25lZEluKClcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdHJlc3BvbnNlID0+IHRoaXMucmVzcG9uc2UgPSByZXNwb25zZSxcblx0XHRcdFx0ZXJyb3IgPT4gY29uc29sZS5sb2coXCJvbklzU2lnbmVkSW4gZXJyb3I6XCIsIGVycm9yKVxuXHRcdFx0KVxuXHR9XG5cblxuXHRvbkdldFBvc3RzKCkge1xuXHRcdHRoaXMuX2h0dHBTZXJ2aWNlLmdldFBvc3RzKClcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdHJlc3BvbnNlID0+IHRoaXMucmVzcG9uc2UgPSByZXNwb25zZSxcblx0XHRcdFx0ZXJyb3IgPT4gY29uc29sZS5sb2coXCJvbkdldFBvc3RzIGVycm9yOlwiLCBlcnJvcilcblx0XHRcdClcblx0fVxuXG5cdG9uUG9zdCh0aXRsZTogc3RyaW5nLCBib2R5OiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nKSB7XG5cdFx0dGhpcy5faHR0cFNlcnZpY2UuY3JlYXRlUG9zdCh7dGl0bGU6IHRpdGxlLCBib2R5OiBib2R5LCB1c2VySWQ6ICt1c2VySWR9KVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0cmVzcG9uc2UgPT4gdGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlLFxuXHRcdFx0XHRlcnJvciA9PiBjb25zb2xlLmxvZyhcIm9uUG9zdCBlcnJvcjpcIiwgZXJyb3IpXG5cdFx0XHQpO1xuXHR9XG59XG5cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
