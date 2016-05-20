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
var piechart_1 = require('../../../../components/chart/piechart/piechart');
var codehighlighter_1 = require('../../../../components/codehighlighter/codehighlighter');
var tabview_1 = require('../../../../components/tabview/tabview');
var tabpanel_1 = require('../../../../components/tabview/tabpanel');
var growl_1 = require('../../../../components/growl/growl');
var button_1 = require('../../../../components/button/button');
var router_1 = require('angular2/router');
var PieChartDemo = (function () {
    function PieChartDemo() {
        this.data1 = [{
                value: 300,
                color: '#F7464A',
                highlight: '#FF5A5E',
                label: 'Red'
            },
            {
                value: 50,
                color: '#46BFBD',
                highlight: '#5AD3D1',
                label: 'Green'
            },
            {
                value: 100,
                color: '#FDB45C',
                highlight: '#FFC870',
                label: 'Yellow'
            }];
        this.data2 = [{
                value: 125,
                color: '#2196F3',
                highlight: '#64B5F6',
                label: 'Comedy'
            },
            {
                value: 50,
                color: '#673AB7',
                highlight: '#9575CD',
                label: 'Drama'
            },
            {
                value: 75,
                color: '#00897B',
                highlight: '#26A69A',
                label: 'Action'
            },
            {
                value: 22,
                color: '#FF9800',
                highlight: '#FFB74D',
                label: 'Romance'
            },
            {
                value: 100,
                color: '#FF5722',
                highlight: '#FF8A65',
                label: 'Sci-fi'
            }];
    }
    PieChartDemo.prototype.onSegmentClick = function (event) {
        if (event.segments) {
            this.msgs = [{ severity: 'info', summary: 'Segment Selected', 'detail': event.segments[0].label }];
        }
    };
    PieChartDemo.prototype.removeYellow = function () {
        this.data1.pop();
        this.updated = true;
    };
    PieChartDemo = __decorate([
        core_1.Component({
            templateUrl: 'showcase/demo/chart/piechart/piechartdemo.html',
            directives: [piechart_1.PieChart, button_1.Button, growl_1.Growl, tabpanel_1.TabPanel, tabview_1.TabView, codehighlighter_1.CodeHighlighter, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], PieChartDemo);
    return PieChartDemo;
}());
exports.PieChartDemo = PieChartDemo;
//# sourceMappingURL=piechartdemo.js.map