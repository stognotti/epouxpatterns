"use strict";
var browser_1 = require('angular2/platform/browser');
var core_1 = require('angular2/core');
var app_component_1 = require('./app.component');
var router_1 = require('angular2/router');
require('rxjs/Rx');
//enableProdMode();
browser_1.bootstrap(app_component_1.AppComponent, [
    router_1.ROUTER_PROVIDERS,
    core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
]);
//# sourceMappingURL=boot.js.map