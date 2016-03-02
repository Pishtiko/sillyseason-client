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
                HttpService.prototype.getLeagues = function () {
                    return this._http.get('http://localhost:3001/leagues')
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBQ0MscUJBQW9CLEtBQVc7b0JBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtnQkFBRyxDQUFDO2dCQUVuQyxnQ0FBVSxHQUFWO29CQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQzt5QkFDN0MsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUMxQixDQUFDO2dCQUVELGdDQUFVLEdBQVY7b0JBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDO3lCQUNwRCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQzFCLENBQUM7Z0JBRUQsOEJBQVEsR0FBUjtvQkFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUM7eUJBQ2hFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztnQkFFRCxnQ0FBVSxHQUFWLFVBQVcsSUFBbUQ7b0JBQzdELElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2xDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7b0JBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLDhCQUE4QixDQUFDLENBQUM7b0JBQy9ELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQywyQ0FBMkMsRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTztxQkFDMUYsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDM0IsQ0FBQztnQkExQkY7b0JBQUMsaUJBQVUsRUFBRTs7K0JBQUE7Z0JBMkJiLGtCQUFDO1lBQUQsQ0F6QkEsQUF5QkMsSUFBQTtZQXpCRCxxQ0F5QkMsQ0FBQSIsImZpbGUiOiJodHRwLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtIdHRwfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQge0hlYWRlcnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBIdHRwU2VydmljZSB7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHt9XG5cblx0aXNTaWduZWRJbigpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAxLycpXG5cdFx0XHQubWFwKHJlcyA9PiByZXMuanNvbigpKTtcblx0fVxuXG5cdGdldExlYWd1ZXMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9sZWFndWVzJylcblx0XHRcdC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuXHR9XG5cblx0Z2V0UG9zdHMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5nZXQoJ2h0dHA6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJylcblx0XHRcdC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuXHR9XG5cblx0Y3JlYXRlUG9zdChwb3N0OiB7dGl0bGU6IHN0cmluZywgYm9keTogc3RyaW5nLCB1c2VySWQ6IG51bWJlcn0pOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShwb3N0KTtcblx0XHRsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cdFx0aGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy11cmxlbmNvZGVkJyk7XG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAucG9zdCgnaHR0cDovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc1xuXHRcdH0pLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
