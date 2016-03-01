System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1, http_2;
    var HttpService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            HttpService = (function () {
                function HttpService(_http) {
                    this._http = _http;
                }
                HttpService.prototype.isSignedIn = function () {
                    return this._http.get('http://localhost:3001/')
                        .map(function (res) { return res.json(); });
                };
                HttpService.prototype.getPosts = function () {
                    return this._http.get('http://jsonplaceholder.typicode.com/posts')
                        .map(function (res) { return res.json(); });
                };
                HttpService.prototype.createPost = function (post) {
                    var body = JSON.stringify(post);
                    var headers = new http_2.Headers();
                    headers.append('Content-Type', 'application/x-www-urlencoded');
                    return this._http.post('http://jsonplaceholder.typicode.com/posts', body, { headers: headers
                    }).map(function (res) { return res.json(); });
                };
                HttpService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HttpService);
                return HttpService;
            }());
            exports_1("HttpService", HttpService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBQ0MscUJBQW9CLEtBQVc7b0JBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtnQkFBRyxDQUFDO2dCQUVuQyxnQ0FBVSxHQUFWO29CQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQzt5QkFDN0MsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUMxQixDQUFDO2dCQUVELDhCQUFRLEdBQVI7b0JBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDO3lCQUNoRSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQzFCLENBQUM7Z0JBRUQsZ0NBQVUsR0FBVixVQUFXLElBQW1EO29CQUM3RCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNsQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO29CQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO29CQUMvRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsMkNBQTJDLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU87cUJBQzFGLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQzNCLENBQUM7Z0JBckJGO29CQUFDLGlCQUFVLEVBQUU7OytCQUFBO2dCQXNCYixrQkFBQztZQUFELENBcEJBLEFBb0JDLElBQUE7WUFwQkQscUNBb0JDLENBQUEiLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SHR0cH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgJ3J4anMvUngnO1xuaW1wb3J0IHtIZWFkZXJzfSBmcm9tICdhbmd1bGFyMi9odHRwJztcblxuQEluamVjdGFibGUoKVxuXG5leHBvcnQgY2xhc3MgSHR0cFNlcnZpY2Uge1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7fVxuXG5cdGlzU2lnbmVkSW4oKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS8nKVxuXHRcdFx0Lm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblxuXHRnZXRQb3N0cygpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnKVxuXHRcdFx0Lm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblxuXHRjcmVhdGVQb3N0KHBvc3Q6IHt0aXRsZTogc3RyaW5nLCBib2R5OiBzdHJpbmcsIHVzZXJJZDogbnVtYmVyfSk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0Y29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHBvc3QpO1xuXHRcdGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LXVybGVuY29kZWQnKTtcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5wb3N0KCdodHRwOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cycsIGJvZHksIHtoZWFkZXJzOiBoZWFkZXJzXG5cdFx0fSkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
