System.register(['angular2/core', "./http.service"], function(exports_1, context_1) {
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
    var core_1, http_service_1;
    var LeaguesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            }],
        execute: function() {
            LeaguesComponent = (function () {
                function LeaguesComponent(_httpService) {
                    this._httpService = _httpService;
                }
                LeaguesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._httpService.getLeagues()
                        .subscribe(function (response) { return _this.leagues = response; }, function (error) { return console.log("ngOnInit error:", error); });
                };
                LeaguesComponent.prototype.onSelectLeague = function (league) {
                    console.log("onSelectLeague", league);
                };
                LeaguesComponent = __decorate([
                    core_1.Component({
                        selector: 'ss-leagues',
                        templateUrl: 'templates/leagues.html',
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HttpService])
                ], LeaguesComponent);
                return LeaguesComponent;
            }());
            exports_1("LeaguesComponent", LeaguesComponent);
        }
    }
});
// response => console.log("ngOnInit response:", response[0].league.league_name),

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYWd1ZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBR0MsMEJBQW9CLFlBQXlCO29CQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtnQkFBRyxDQUFDO2dCQUNqRCxtQ0FBUSxHQUFSO29CQUFBLGlCQU1DO29CQUxBLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFO3lCQUM1QixTQUFTLENBQ1QsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsRUFBdkIsQ0FBdUIsRUFDbkMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxFQUFyQyxDQUFxQyxDQUM5QyxDQUFBO2dCQUNILENBQUM7Z0JBQ0QseUNBQWMsR0FBZCxVQUFlLE1BQU07b0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBbEJGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFdBQVcsRUFBRSx3QkFBd0I7cUJBQ3JDLENBQUM7O29DQUFBO2dCQWtCRix1QkFBQztZQUFELENBaEJBLEFBZ0JDLElBQUE7WUFoQkQsK0NBZ0JDLENBQUE7Ozs7QUFFRCxpRkFBaUYiLCJmaWxlIjoibGVhZ3Vlcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0h0dHBTZXJ2aWNlfSBmcm9tIFwiLi9odHRwLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3MtbGVhZ3VlcycsXG5cdHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2xlYWd1ZXMuaHRtbCcsXG59KVxuXG5leHBvcnQgY2xhc3MgTGVhZ3Vlc0NvbXBvbmVudCB7XG5cdGxlYWd1ZXM6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSHR0cFNlcnZpY2UpIHt9XG5cdG5nT25Jbml0KCk6YW55IHtcblx0XHR0aGlzLl9odHRwU2VydmljZS5nZXRMZWFndWVzKClcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdHJlc3BvbnNlID0+IHRoaXMubGVhZ3VlcyA9IHJlc3BvbnNlLFxuXHRcdFx0XHRlcnJvciA9PiBjb25zb2xlLmxvZyhcIm5nT25Jbml0IGVycm9yOlwiLCBlcnJvcilcblx0XHRcdClcblx0fVxuXHRvblNlbGVjdExlYWd1ZShsZWFndWUpIHtcblx0XHRjb25zb2xlLmxvZyhcIm9uU2VsZWN0TGVhZ3VlXCIsIGxlYWd1ZSk7XG5cdH1cblxuXG59XG5cbi8vIHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKFwibmdPbkluaXQgcmVzcG9uc2U6XCIsIHJlc3BvbnNlWzBdLmxlYWd1ZS5sZWFndWVfbmFtZSksXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
