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
var barchart_1 = require('../../../../components/chart/barchart/barchart');
var codehighlighter_1 = require('../../../../components/codehighlighter/codehighlighter');
var tabview_1 = require('../../../../components/tabview/tabview');
var tabpanel_1 = require('../../../../components/tabview/tabpanel');
var growl_1 = require('../../../../components/growl/growl');
var button_1 = require('../../../../components/button/button');
var router_1 = require('angular2/router');
var BarChartDemo = (function () {
    function BarChartDemo() {
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    fillColor: '#42A5F5',
                    strokeColor: '#1E88E5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    fillColor: '#9CCC65',
                    strokeColor: '#7CB342',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
    }
    BarChartDemo.prototype.onSelect = function (event) {
        if (event.bars) {
            this.msgs = [];
            for (var i = 0; i < event.bars.length; i++) {
                this.msgs.push({ severity: 'info', summary: 'Bar Selected', 'detail': event.bars[i].label + ' ' + event.bars[i].value });
            }
        }
    };
    BarChartDemo = __decorate([
        core_1.Component({
            templateUrl: 'showcase/demo/chart/barchart/barchartdemo.html',
            directives: [barchart_1.BarChart, button_1.Button, growl_1.Growl, tabpanel_1.TabPanel, tabview_1.TabView, codehighlighter_1.CodeHighlighter, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], BarChartDemo);
    return BarChartDemo;
}());
exports.BarChartDemo = BarChartDemo;
//# sourceMappingURL=barchartdemo.js.map