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
var galleria_1 = require('../../../components/galleria/galleria');
var codehighlighter_1 = require('../../../components/codehighlighter/codehighlighter');
var tabview_1 = require('../../../components/tabview/tabview');
var tabpanel_1 = require('../../../components/tabview/tabpanel');
var router_1 = require('angular2/router');
var GalleriaDemo = (function () {
    function GalleriaDemo() {
        this.images = ['galleria1.jpg', 'galleria2.jpg', 'galleria3.jpg', 'galleria4.jpg', 'galleria5.jpg', 'galleria6.jpg', 'galleria7.jpg', 'galleria8.jpg',
            'galleria9.jpg', 'galleria10.jpg', 'galleria11.jpg', 'galleria12.jpg'];
    }
    GalleriaDemo = __decorate([
        core_1.Component({
            templateUrl: 'showcase/demo/galleria/galleriademo.html',
            directives: [galleria_1.Galleria, tabview_1.TabView, tabpanel_1.TabPanel, codehighlighter_1.CodeHighlighter, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], GalleriaDemo);
    return GalleriaDemo;
}());
exports.GalleriaDemo = GalleriaDemo;
//# sourceMappingURL=galleriademo.js.map