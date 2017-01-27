"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        var users = [];
        var storageUser = localStorage.getItem('users');
        if (storageUser) {
            users = JSON.parse(storageUser);
        }
        return this.http.get('/api/users.json').map(function (response) { return users; });
    };
    UserService.prototype.getById = function (id) {
        var updateUser = {};
        var storageUser = JSON.parse(localStorage.getItem('users'));
        if (storageUser) {
            updateUser = storageUser[id];
        }
        return this.http.get('/api/edit_users.json?' + id).map(function (response) { return updateUser; });
    };
    UserService.prototype.create = function (user) {
        var users = [];
        var userArrayObj = [];
        var storageUser = localStorage.getItem('users');
        if (storageUser) {
            userArrayObj = JSON.parse(storageUser);
            user['id'] = userArrayObj.length + 1;
            userArrayObj.push(user);
        }
        else {
            user['id'] = 1;
            userArrayObj.push(user);
        }
        localStorage.setItem('users', JSON.stringify(userArrayObj));
        return this.http.post('/api/users.json', user).map(function (response) { return userArrayObj; });
    };
    UserService.prototype.update = function (user, index) {
        var storageUser = JSON.parse(localStorage.getItem('users'));
        storageUser[index] = user;
        localStorage.setItem('users', JSON.stringify(storageUser));
        return this.http.put('/api/users.json?' + user.id, user).map(function (response) { return storageUser; });
    };
    UserService.prototype.delete = function (id) {
        var storageUser = JSON.parse(localStorage.getItem('users'));
        storageUser.splice(id, 1);
        var storageUserString = (storageUser.length > 0) ? JSON.stringify(storageUser) : '';
        localStorage.setItem('users', storageUserString);
        return this.http.get('/api/users.json?' + id).map(function (response) { return storageUser; });
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map