"use strict";
var router_1 = require("@angular/router");
var index_1 = require("./user/list/index");
var index_2 = require("./user/create/index");
var index_3 = require("./user/update/index");
var appRoutes = [
    { path: '', component: index_1.ListComponent },
    { path: 'create', component: index_2.CreateComponent },
    { path: 'update/:id', component: index_3.UpdateComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map