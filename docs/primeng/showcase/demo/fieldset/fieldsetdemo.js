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
var fieldset_1 = require('../../../components/fieldset/fieldset');
var codehighlighter_1 = require('../../../components/codehighlighter/codehighlighter');
var tabview_1 = require('../../../components/tabview/tabview');
var tabpanel_1 = require('../../../components/tabview/tabpanel');
var router_1 = require('angular2/router');
var FieldsetDemo = (function () {
    function FieldsetDemo() {
    }
    FieldsetDemo = __decorate([
        core_1.Component({
            templateUrl: 'showcase/demo/fieldset/fieldsetdemo.html',
            directives: [fieldset_1.Fieldset, tabview_1.TabView, tabpanel_1.TabPanel, codehighlighter_1.CodeHighlighter, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], FieldsetDemo);
    return FieldsetDemo;
}());
exports.FieldsetDemo = FieldsetDemo;
//# sourceMappingURL=fieldsetdemo.js.map