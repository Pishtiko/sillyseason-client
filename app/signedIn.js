System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, router_1;
    var isSignedIn;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            // import {Login} from '../login/login';
            isSignedIn = (function (_super) {
                __extends(isSignedIn, _super);
                function isSignedIn(_elementRef, _loader, _parentRouter, nameAttr) {
                    _super.call(this, _elementRef, _loader, _parentRouter, nameAttr);
                    this.parentRouter = _parentRouter;
                    this.publicRoutes = {
                        '/login': true,
                        '/signup': true
                    };
                }
                isSignedIn.prototype.activate = function (instruction) {
                    var url = this.parentRouter.lastNavigationAttempt;
                    if (!this.publicRoutes[url] && !localStorage.getItem('jwt')) {
                    }
                    return _super.prototype.activate.call(this, instruction);
                };
                isSignedIn = __decorate([
                    core_1.Directive({
                        selector: 'router-outlet'
                    }),
                    __param(3, core_1.Attribute('name')), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.DynamicComponentLoader, router_1.Router, String])
                ], isSignedIn);
                return isSignedIn;
            }(router_1.RouterOutlet));
            exports_1("isSignedIn", isSignedIn);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25lZEluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFQSx3Q0FBd0M7WUFLeEM7Z0JBQWdDLDhCQUFZO2dCQUkxQyxvQkFBWSxXQUF1QixFQUFFLE9BQStCLEVBQ3hELGFBQXFCLEVBQXFCLFFBQWdCO29CQUNwRSxrQkFBTSxXQUFXLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFFckQsSUFBSSxDQUFDLFlBQVksR0FBRyxhQUFhLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUc7d0JBQ2xCLFFBQVEsRUFBRSxJQUFJO3dCQUNkLFNBQVMsRUFBRSxJQUFJO3FCQUNoQixDQUFDO2dCQUNKLENBQUM7Z0JBRUQsNkJBQVEsR0FBUixVQUFTLFdBQWlDO29CQUN4QyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDO29CQUNsRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFHOUQsQ0FBQztvQkFDRCxNQUFNLENBQUMsZ0JBQUssQ0FBQyxRQUFRLFlBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBekJIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLGVBQWU7cUJBQzFCLENBQUM7K0JBTW9DLGdCQUFTLENBQUMsTUFBTSxDQUFDOzs4QkFOckQ7Z0JBd0JGLGlCQUFDO1lBQUQsQ0F2QkEsQUF1QkMsQ0F2QitCLHFCQUFZLEdBdUIzQztZQXZCRCxtQ0F1QkMsQ0FBQSIsImZpbGUiOiJzaWduZWRJbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBBdHRyaWJ1dGUsIEVsZW1lbnRSZWYsIER5bmFtaWNDb21wb25lbnRMb2FkZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXIsIFJvdXRlck91dGxldCwgQ29tcG9uZW50SW5zdHJ1Y3Rpb259IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG4vLyBpbXBvcnQge0xvZ2lufSBmcm9tICcuLi9sb2dpbi9sb2dpbic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ3JvdXRlci1vdXRsZXQnXG59KVxuZXhwb3J0IGNsYXNzIGlzU2lnbmVkSW4gZXh0ZW5kcyBSb3V0ZXJPdXRsZXQge1xuICBwdWJsaWNSb3V0ZXM6IGFueTtcbiAgcHJpdmF0ZSBwYXJlbnRSb3V0ZXI6IFJvdXRlcjtcblxuICBjb25zdHJ1Y3RvcihfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgX2xvYWRlcjogRHluYW1pY0NvbXBvbmVudExvYWRlcixcbiAgICAgICAgICAgICAgX3BhcmVudFJvdXRlcjogUm91dGVyLCBAQXR0cmlidXRlKCduYW1lJykgbmFtZUF0dHI6IHN0cmluZykge1xuICAgIHN1cGVyKF9lbGVtZW50UmVmLCBfbG9hZGVyLCBfcGFyZW50Um91dGVyLCBuYW1lQXR0cik7XG5cbiAgICB0aGlzLnBhcmVudFJvdXRlciA9IF9wYXJlbnRSb3V0ZXI7XG4gICAgdGhpcy5wdWJsaWNSb3V0ZXMgPSB7XG4gICAgICAnL2xvZ2luJzogdHJ1ZSxcbiAgICAgICcvc2lnbnVwJzogdHJ1ZVxuICAgIH07XG4gIH1cblxuICBhY3RpdmF0ZShpbnN0cnVjdGlvbjogQ29tcG9uZW50SW5zdHJ1Y3Rpb24pIHtcbiAgICB2YXIgdXJsID0gdGhpcy5wYXJlbnRSb3V0ZXIubGFzdE5hdmlnYXRpb25BdHRlbXB0O1xuICAgIGlmICghdGhpcy5wdWJsaWNSb3V0ZXNbdXJsXSAmJiAhbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2p3dCcpKSB7XG4gICAgICAvLyB0b2RvOiByZWRpcmVjdCB0byBMb2dpbiwgbWF5IGJlIHRoZXJlIGEgYmV0dGVyIHdheT9cbiAgICAgIC8vIHRoaXMucGFyZW50Um91dGVyLm5hdmlnYXRlQnlVcmwoJy9sb2dpbicpO1xuICAgIH1cbiAgICByZXR1cm4gc3VwZXIuYWN0aXZhdGUoaW5zdHJ1Y3Rpb24pO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
