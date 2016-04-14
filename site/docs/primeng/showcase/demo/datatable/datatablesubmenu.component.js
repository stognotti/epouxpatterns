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
var router_1 = require('angular2/router');
var DataTableSubmenu = (function () {
    function DataTableSubmenu() {
    }
    DataTableSubmenu = __decorate([
        core_1.Component({
            selector: 'datatable-demos',
            template: "\n        <div id=\"datatable-submenu\" class=\"ContentSideSections SubSubMenu ui-helper-clearfix\">\n            <ul>\n                <li><a [routerLink]=\"['DataTableDemo']\">&#9679; Basic</a></li>\n                <li><a [routerLink]=\"['DataTableFacetsDemo']\">&#9679; Facets</a></li>\n                <li><a [routerLink]=\"['DataTableTemplatingDemo']\">&#9679; Templating</a></li>\n                <li><a [routerLink]=\"['DataTableGroupDemo']\">&#9679; Group</a></li>\n                <li><a [routerLink]=\"['DataTablePaginatorDemo']\">&#9679; Paginator</a></li>\n                <li><a [routerLink]=\"['DataTableSortDemo']\">&#9679; Sort</a></li>\n                <li><a [routerLink]=\"['DataTableFilterDemo']\">&#9679; Filter</a></li>\n                <li><a [routerLink]=\"['DataTableSelectionDemo']\">&#9679; Selection</a></li>\n                <li><a [routerLink]=\"['DataTableEditableDemo']\">&#9679; Editable</a></li>\n                <li><a [routerLink]=\"['DataTableColResizeDemo']\">&#9679; Resize</a></li>\n                <li><a [routerLink]=\"['DataTableColReorderDemo']\">&#9679; Reorder</a></li>\n                <li><a [routerLink]=\"['DataTableScrollDemo']\">&#9679; Scroll</a></li>\n                <li><a [routerLink]=\"['DataTableLazyDemo']\">&#9679; Lazy</a></li>\n                <li><a [routerLink]=\"['DataTableCMDemo']\">&#9679; ContextMenu</a></li>\n                <li><a [routerLink]=\"['DataTableColTogglerDemo']\">&#9679; ColToggler</a></li>\n                <li><a [routerLink]=\"['DataTableResponsiveDemo']\">&#9679; Responsive</a></li>\n                <li><a [routerLink]=\"['DataTableCrudDemo']\">&#9679; Crud</a></li>\n            </ul>\n        </div>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], DataTableSubmenu);
    return DataTableSubmenu;
}());
exports.DataTableSubmenu = DataTableSubmenu;
//# sourceMappingURL=datatablesubmenu.component.js.map