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
var core_1 = require('angular2/core');
var breadcrumb_1 = require('../../../components/breadcrumb/breadcrumb');
var codehighlighter_1 = require('../../../components/codehighlighter/codehighlighter');
var button_1 = require('../../../components/button/button');
var tabview_1 = require('../../../components/tabview/tabview');
var tabpanel_1 = require('../../../components/tabview/tabpanel');
var router_1 = require('angular2/router');
var BreadcrumbDemo = (function () {
    function BreadcrumbDemo() {
    }
    BreadcrumbDemo = __decorate([
        core_1.Component({
            templateUrl: 'showcase/demo/breadcrumb/breadcrumbdemo.html',
            directives: [breadcrumb_1.Breadcrumb, button_1.Button, tabpanel_1.TabPanel, tabview_1.TabView, codehighlighter_1.CodeHighlighter, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], BreadcrumbDemo);
    return BreadcrumbDemo;
}());
exports.BreadcrumbDemo = BreadcrumbDemo;
//# sourceMappingURL=breadcrumbdemo.js.map