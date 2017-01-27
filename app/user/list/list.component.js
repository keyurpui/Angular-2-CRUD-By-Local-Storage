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
//import { Injectable } from '@angular/core';
//import { Http, Headers, Response } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
require("rxjs/add/operator/map");
var index_1 = require("../../_services/index");
var ListComponent = (function () {
    function ListComponent(userService, alertService) {
        this.userService = userService;
        this.alertService = alertService;
        this.users = [];
        //this.currentUser = {"id": 1, "username": "laxmi", "firstName": "laxmiaknt", "password": "123", "lastName": "kkant"};//JSON.parse(localStorage.getItem('currentUser'));
    }
    ListComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
    };
    ListComponent.prototype.deleteUser = function (index) {
        var _this = this;
        if (confirm("Are you sure, you want to delete this user?")) {
            this.userService.delete(index).subscribe(function () {
                _this.alertService.success('Deleted user successful', true);
                _this.loadAllUsers();
            });
        }
    };
    ListComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (users) { _this.users = users; });
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'list.component.html'
    }),
    __metadata("design:paramtypes", [index_1.UserService, index_1.AlertService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map