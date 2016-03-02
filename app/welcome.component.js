System.register(['angular2/core', "./leagues.component", "./about.component"], function(exports_1, context_1) {
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
    var core_1, leagues_component_1, about_component_1;
    var WelcomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (leagues_component_1_1) {
                leagues_component_1 = leagues_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            }],
        execute: function() {
            WelcomeComponent = (function () {
                function WelcomeComponent() {
                }
                WelcomeComponent.prototype.onLeagueOrAbout = function (leagueOrAbout) {
                    this.leagueOrAbout = leagueOrAbout;
                };
                WelcomeComponent.prototype.onCreateTeam = function () {
                };
                WelcomeComponent = __decorate([
                    core_1.Component({
                        selector: 'ss-welcome',
                        templateUrl: 'templates/welcome.html',
                        directives: [leagues_component_1.LeaguesComponent, about_component_1.AboutComponent],
                    }), 
                    __metadata('design:paramtypes', [])
                ], WelcomeComponent);
                return WelcomeComponent;
            }());
            exports_1("WelcomeComponent", WelcomeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBQUE7Z0JBVUEsQ0FBQztnQkFQQSwwQ0FBZSxHQUFmLFVBQWdCLGFBQXFCO29CQUNwQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztnQkFDcEMsQ0FBQztnQkFFRCx1Q0FBWSxHQUFaO2dCQUVBLENBQUM7Z0JBaEJGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFdBQVcsRUFBRSx3QkFBd0I7d0JBQ3JDLFVBQVUsRUFBRSxDQUFDLG9DQUFnQixFQUFFLGdDQUFjLENBQUM7cUJBRTlDLENBQUM7O29DQUFBO2dCQVlGLHVCQUFDO1lBQUQsQ0FWQSxBQVVDLElBQUE7WUFWRCwrQ0FVQyxDQUFBIiwiZmlsZSI6IndlbGNvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtMZWFndWVzQ29tcG9uZW50fSBmcm9tIFwiLi9sZWFndWVzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBYm91dENvbXBvbmVudH0gZnJvbSBcIi4vYWJvdXQuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3NzLXdlbGNvbWUnLFxuXHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy93ZWxjb21lLmh0bWwnLFxuXHRkaXJlY3RpdmVzOiBbTGVhZ3Vlc0NvbXBvbmVudCwgQWJvdXRDb21wb25lbnRdLFxuXG59KVxuXG5leHBvcnQgY2xhc3MgV2VsY29tZUNvbXBvbmVudCB7XG5cdGxlYWd1ZU9yQWJvdXQ6IHN0cmluZztcblxuXHRvbkxlYWd1ZU9yQWJvdXQobGVhZ3VlT3JBYm91dDogc3RyaW5nKSB7XG5cdFx0dGhpcy5sZWFndWVPckFib3V0ID0gbGVhZ3VlT3JBYm91dDtcblx0fVxuXG5cdG9uQ3JlYXRlVGVhbSgpIHtcblxuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
