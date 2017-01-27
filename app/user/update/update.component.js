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
var router_1 = require("@angular/router");
var index_1 = require("../../_services/index");
var UpdateComponent = (function () {
    function UpdateComponent(route, router, userService, alertService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
        this.userId = 0;
    }
    UpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.userId = params["id"];
        });
        this.userService.getById(this.userId).subscribe(function (users) { _this.model = users; });
    };
    UpdateComponent.prototype.updateUser = function () {
        var _this = this;
        this.loading = true;
        this.userService.update(this.model, this.userId)
            .subscribe(function (data) {
            _this.alertService.success('User Updated successful', true);
            _this.router.navigate(['/']);
        }, function (error) {
            _this.alertService.success('User Updated successful', true);
            _this.router.navigate(['/']);
            //this.alertService.error(error);
            //this.loading = false;
        });
    };
    return UpdateComponent;
}());
UpdateComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'update.component.html',
        styleUrls: ['update.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        index_1.UserService,
        index_1.AlertService])
], UpdateComponent);
exports.UpdateComponent = UpdateComponent;
//# sourceMappingURL=update.component.js.map