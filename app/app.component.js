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
            AppComponent = (function () {
                function AppComponent(_httpService) {
                    this._httpService = _httpService;
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._httpService.isSignedIn()
                        .subscribe(function (response) { return _this.isSignedIn = response.isSignedIn; }, function (error) { return console.log("ngOnInit error:", error); });
                };
                AppComponent.prototype.onIsSignedIn = function () {
                    var _this = this;
                    this._httpService.isSignedIn()
                        .subscribe(function (response) { return _this.response = response; }, function (error) { return console.log("onIsSignedIn error:", error); });
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
                    __metadata('design:paramtypes', [http_service_1.HttpService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQUdDLHNCQUFvQixZQUF5QjtvQkFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7Z0JBQUcsQ0FBQztnQkFFakQsK0JBQVEsR0FBUjtvQkFBQSxpQkFNQztvQkFMQSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRTt5QkFDNUIsU0FBUyxDQUNULFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsVUFBVSxFQUFyQyxDQUFxQyxFQUNqRCxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQzlDLENBQUE7Z0JBQ0gsQ0FBQztnQkFLRCxtQ0FBWSxHQUFaO29CQUFBLGlCQU1DO29CQUxBLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFO3lCQUM1QixTQUFTLENBQ1QsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsRUFBeEIsQ0FBd0IsRUFDcEMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxFQUF6QyxDQUF5QyxDQUNsRCxDQUFBO2dCQUNILENBQUM7Z0JBbENGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFdBQVcsRUFBRSxvQkFBb0I7d0JBQ2pDLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7d0JBQ3hCLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3FCQUNsQyxDQUFDO29CQUVELG9CQUFXLENBQUM7d0JBQ1osRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUM7cUJBQ3BGLENBQUM7O2dDQUFBO2dCQTJCRixtQkFBQztZQUFELENBeEJBLEFBd0JDLElBQUE7WUF4QkQsdUNBd0JDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SHR0cFNlcnZpY2V9IGZyb20gXCIuL2h0dHAuc2VydmljZVwiO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Um91dGVDb25maWd9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge09uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1dlbGNvbWVDb21wb25lbnR9IGZyb20gXCIuL3dlbGNvbWUuY29tcG9uZW50XCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzaWxseXNlYXNvbicsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvYXBwLmh0bWwnLFxuICAgIHByb3ZpZGVyczogW0h0dHBTZXJ2aWNlXSxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxufSlcblxuQFJvdXRlQ29uZmlnKFtcblx0e3BhdGg6ICcvd2VsY29tZScsIG5hbWU6ICdXZWxjb21lJywgY29tcG9uZW50OiBXZWxjb21lQ29tcG9uZW50LCB1c2VBc0RlZmF1bHQ6IHRydWV9LFxuXSlcblxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0cmVzcG9uc2U6IHN0cmluZztcblx0aXNTaWduZWRJbjogYm9vbGVhbjtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEh0dHBTZXJ2aWNlKSB7fVxuXG5cdG5nT25Jbml0KCk6YW55IHtcblx0XHR0aGlzLl9odHRwU2VydmljZS5pc1NpZ25lZEluKClcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdHJlc3BvbnNlID0+IHRoaXMuaXNTaWduZWRJbiA9IHJlc3BvbnNlLmlzU2lnbmVkSW4sXG5cdFx0XHRcdGVycm9yID0+IGNvbnNvbGUubG9nKFwibmdPbkluaXQgZXJyb3I6XCIsIGVycm9yKVxuXHRcdFx0KVxuXHR9XG5cblxuXG5cdFxuXHRvbklzU2lnbmVkSW4oKSB7XG5cdFx0dGhpcy5faHR0cFNlcnZpY2UuaXNTaWduZWRJbigpXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRyZXNwb25zZSA9PiB0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2UsXG5cdFx0XHRcdGVycm9yID0+IGNvbnNvbGUubG9nKFwib25Jc1NpZ25lZEluIGVycm9yOlwiLCBlcnJvcilcblx0XHRcdClcblx0fVxuXG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
