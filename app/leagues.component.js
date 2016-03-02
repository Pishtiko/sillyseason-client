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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYWd1ZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBR0MsMEJBQW9CLFlBQXlCO29CQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtnQkFBRyxDQUFDO2dCQUNqRCxtQ0FBUSxHQUFSO29CQUFBLGlCQU1DO29CQUxBLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFO3lCQUM1QixTQUFTLENBQ1QsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsRUFBdkIsQ0FBdUIsRUFDbkMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxFQUFyQyxDQUFxQyxDQUM5QyxDQUFBO2dCQUNILENBQUM7Z0JBQ0QseUNBQWMsR0FBZCxVQUFlLE1BQU07b0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBbEJGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFdBQVcsRUFBRSx3QkFBd0I7cUJBQ3JDLENBQUM7O29DQUFBO2dCQWdCRix1QkFBQztZQUFELENBZEEsQUFjQyxJQUFBO1lBZEQsK0NBY0MsQ0FBQTs7OztBQUVELGlGQUFpRiIsImZpbGUiOiJsZWFndWVzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SHR0cFNlcnZpY2V9IGZyb20gXCIuL2h0dHAuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzcy1sZWFndWVzJyxcblx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvbGVhZ3Vlcy5odG1sJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBMZWFndWVzQ29tcG9uZW50IHtcblx0bGVhZ3Vlczogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwU2VydmljZSkge31cblx0bmdPbkluaXQoKTphbnkge1xuXHRcdHRoaXMuX2h0dHBTZXJ2aWNlLmdldExlYWd1ZXMoKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0cmVzcG9uc2UgPT4gdGhpcy5sZWFndWVzID0gcmVzcG9uc2UsXG5cdFx0XHRcdGVycm9yID0+IGNvbnNvbGUubG9nKFwibmdPbkluaXQgZXJyb3I6XCIsIGVycm9yKVxuXHRcdFx0KVxuXHR9XG5cdG9uU2VsZWN0TGVhZ3VlKGxlYWd1ZSkge1xuXHRcdGNvbnNvbGUubG9nKFwib25TZWxlY3RMZWFndWVcIiwgbGVhZ3VlKTtcblx0fVxufVxuXG4vLyByZXNwb25zZSA9PiBjb25zb2xlLmxvZyhcIm5nT25Jbml0IHJlc3BvbnNlOlwiLCByZXNwb25zZVswXS5sZWFndWUubGVhZ3VlX25hbWUpLFxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
