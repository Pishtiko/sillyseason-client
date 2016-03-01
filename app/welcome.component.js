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
    var WelcomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            }],
        execute: function() {
            WelcomeComponent = (function () {
                function WelcomeComponent(_httpService) {
                    this._httpService = _httpService;
                }
                WelcomeComponent = __decorate([
                    core_1.Component({
                        selector: 'ss-welcome',
                        templateUrl: 'templates/welcome.html',
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HttpService])
                ], WelcomeComponent);
                return WelcomeComponent;
            }());
            exports_1("WelcomeComponent", WelcomeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBR0MsMEJBQW9CLFlBQXlCO29CQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtnQkFBRyxDQUFDO2dCQVRsRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixXQUFXLEVBQUUsd0JBQXdCO3FCQUNyQyxDQUFDOztvQ0FBQTtnQkFlRix1QkFBQztZQUFELENBWkEsQUFZQyxJQUFBO1lBWkQsK0NBWUMsQ0FBQSIsImZpbGUiOiJ3ZWxjb21lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7T25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SHR0cFNlcnZpY2V9IGZyb20gXCIuL2h0dHAuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzcy13ZWxjb21lJyxcblx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvd2VsY29tZS5odG1sJyxcbn0pXG5cbiAvLyBpbXBsZW1lbnRzIE9uSW5pdFxuZXhwb3J0IGNsYXNzIFdlbGNvbWVDb21wb25lbnQge1xuXG5cdHJlc3BvbnNlOiBzdHJpbmc7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIdHRwU2VydmljZSkge31cblxuXHQvLyBuZ09uSW5pdCgpOmFueSB7XG5cdC8vIFx0dGhpcy5faHR0cFNlcnZpY2UuaXNTaWduZWRJbigpXG5cdC8vIFx0XHQuc3Vic2NyaWJlKFxuXHQvLyBcdFx0XHRyZXNwb25zZSA9PiB0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2UsXG5cdC8vIFx0XHRcdGVycm9yID0+IGNvbnNvbGUubG9nKFwib25HZXRQb3N0cyBlcnJvcjpcIiwgZXJyb3IpXG5cdC8vIFx0XHQpXG5cdC8vIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
