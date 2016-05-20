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
var setup_component_1 = require('./setup.component');
var homepage_component_1 = require('./homepage.component');
var theming_component_1 = require('./theming.component');
var inputtextdemo_1 = require('./demo/inputtext/inputtextdemo');
var buttondemo_1 = require('./demo/button/buttondemo');
var spinnerdemo_1 = require('./demo/spinner/spinnerdemo');
var paneldemo_1 = require('./demo/panel/paneldemo');
var fieldsetdemo_1 = require('./demo/fieldset/fieldsetdemo');
var ratingdemo_1 = require('./demo/rating/ratingdemo');
var passworddemo_1 = require('./demo/password/passworddemo');
var dialogdemo_1 = require('./demo/dialog/dialogdemo');
var togglebuttondemo_1 = require('./demo/togglebutton/togglebuttondemo');
var griddemo_1 = require('./demo/grid/griddemo');
var tabviewdemo_1 = require('./demo/tabview/tabviewdemo');
var radiobuttondemo_1 = require('./demo/radiobutton/radiobuttondemo');
var accordiondemo_1 = require('./demo/accordion/accordiondemo');
var inputtextareademo_1 = require('./demo/inputtextarea/inputtextareademo');
var galleriademo_1 = require('./demo/galleria/galleriademo');
var checkboxdemo_1 = require('./demo/checkbox/checkboxdemo');
var listboxdemo_1 = require('./demo/listbox/listboxdemo');
var messagesdemo_1 = require('./demo/messages/messagesdemo');
var growldemo_1 = require('./demo/growl/growldemo');
var carouseldemo_1 = require('./demo/carousel/carouseldemo');
var inputswitchdemo_1 = require('./demo/inputswitch/inputswitchdemo');
var selectbuttondemo_1 = require('./demo/selectbutton/selectbuttondemo');
var calendardemo_1 = require('./demo/calendar/calendardemo');
var dropdowndemo_1 = require('./demo/dropdown/dropdowndemo');
var progressbardemo_1 = require('./demo/progressbar/progressbardemo');
var piechartdemo_1 = require('./demo/chart/piechart/piechartdemo');
var doughnutchartdemo_1 = require('./demo/chart/doughnutchart/doughnutchartdemo');
var linechartdemo_1 = require('./demo/chart/linechart/linechartdemo');
var barchartdemo_1 = require('./demo/chart/barchart/barchartdemo');
var radarchartdemo_1 = require('./demo/chart/radarchart/radarchartdemo');
var polarareachartdemo_1 = require('./demo/chart/polarareachart/polarareachartdemo');
var menudemo_1 = require('./demo/menu/menudemo');
var tieredmenudemo_1 = require('./demo/tieredmenu/tieredmenudemo');
var menubardemo_1 = require('./demo/menubar/menubardemo');
var slidemenudemo_1 = require('./demo/slidemenu/slidemenudemo');
var breadcrumbdemo_1 = require('./demo/breadcrumb/breadcrumbdemo');
var sliderdemo_1 = require("./demo/slider/sliderdemo");
var lightboxdemo_1 = require("./demo/lightbox/lightboxdemo");
var paginatordemo_1 = require("./demo/paginator/paginatordemo");
var megamenudemo_1 = require("./demo/megamenu/megamenudemo");
var panelmenudemo_1 = require("./demo/panelmenu/panelmenudemo");
var datatabledemo_1 = require("./demo/datatable/datatabledemo");
var datatableeditabledemo_1 = require("./demo/datatable/datatableeditabledemo");
var datatablefacetsdemo_1 = require("./demo/datatable/datatablefacetsdemo");
var datatablepaginatordemo_1 = require("./demo/datatable/datatablepaginatordemo");
var datatablesortdemo_1 = require("./demo/datatable/datatablesortdemo");
var datatableresponsivedemo_1 = require("./demo/datatable/datatableresponsivedemo");
var datatableselectiondemo_1 = require("./demo/datatable/datatableselectiondemo");
var datatablefilterdemo_1 = require("./demo/datatable/datatablefilterdemo");
var datatablecolresizedemo_1 = require("./demo/datatable/datatablecolresizedemo");
var datatablecolreorderdemo_1 = require("./demo/datatable/datatablecolreorderdemo");
var datatablescrolldemo_1 = require("./demo/datatable/datatablescrolldemo");
var datatablegroupdemo_1 = require("./demo/datatable/datatablegroupdemo");
var datatablecruddemo_1 = require("./demo/datatable/datatablecruddemo");
var datatablelazydemo_1 = require("./demo/datatable/datatablelazydemo");
var datatabletemplatingdemo_1 = require("./demo/datatable/datatabletemplatingdemo");
var datatablecmdemo_1 = require("./demo/datatable/datatablecmdemo");
var datatablecoltogglerdemo_1 = require("./demo/datatable/datatablecoltogglerdemo");
var codehighlighterdemo_1 = require("./demo/codehighlighter/codehighlighterdemo");
var orderlistdemo_1 = require("./demo/orderlist/orderlistdemo");
var picklistdemo_1 = require("./demo/picklist/picklistdemo");
var scheduledemo_1 = require("./demo/schedule/scheduledemo");
var datagriddemo_1 = require("./demo/datagrid/datagriddemo");
var datalistdemo_1 = require("./demo/datalist/datalistdemo");
var datascrollerdemo_1 = require("./demo/datascroller/datascrollerdemo");
var datascrollerinlinedemo_1 = require("./demo/datascroller/datascrollerinlinedemo");
var datascrollerloaderdemo_1 = require("./demo/datascroller/datascrollerloaderdemo");
var datascrollerinfinitedemo_1 = require("./demo/datascroller/datascrollerinfinitedemo");
var treedemo_1 = require("./demo/tree/treedemo");
var treetabledemo_1 = require("./demo/treetable/treetabledemo");
var terminaldemo_1 = require("./demo/terminal/terminaldemo");
var splitbuttondemo_1 = require("./demo/splitbutton/splitbuttondemo");
var overlaypaneldemo_1 = require("./demo/overlaypanel/overlaypaneldemo");
var autocompletedemo_1 = require("./demo/autocomplete/autocompletedemo");
var editordemo_1 = require("./demo/editor/editordemo");
var responsivedemo_1 = require("./demo/responsive/responsivedemo");
var multiselectdemo_1 = require("./demo/multiselect/multiselectdemo");
var gmapdemo_1 = require("./demo/gmap/gmapdemo");
var contextmenudemo_1 = require("./demo/contextmenu/contextmenudemo");
var AppComponent = (function () {
    function AppComponent() {
        this.themesVisible = false;
        this.mobileMenuActive = false;
    }
    AppComponent.prototype.toggleMenu = function (e) {
        this.mobileMenuActive = !this.mobileMenuActive;
        e.preventDefault();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'primeng-showcase',
            templateUrl: 'showcase/app.component.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/', name: 'HomePage', component: homepage_component_1.HomePageComponent },
            { path: '/setup', name: 'Setup', component: setup_component_1.SetupComponent },
            { path: '/theming', name: 'Theming', component: theming_component_1.ThemingComponent },
            { path: '/inputtext', name: 'InputTextDemo', component: inputtextdemo_1.InputTextDemo },
            { path: '/button', name: 'ButtonDemo', component: buttondemo_1.ButtonDemo },
            { path: '/spinner', name: 'SpinnerDemo', component: spinnerdemo_1.SpinnerDemo },
            { path: '/panel', name: 'PanelDemo', component: paneldemo_1.PanelDemo },
            { path: '/fieldset', name: 'FieldsetDemo', component: fieldsetdemo_1.FieldsetDemo },
            { path: '/rating', name: 'RatingDemo', component: ratingdemo_1.RatingDemo },
            { path: '/password', name: 'PasswordDemo', component: passworddemo_1.PasswordDemo },
            { path: '/dialog', name: 'DialogDemo', component: dialogdemo_1.DialogDemo },
            { path: '/togglebutton', name: 'ToggleButtonDemo', component: togglebuttondemo_1.ToggleButtonDemo },
            { path: '/grid', name: 'GridDemo', component: griddemo_1.GridDemo },
            { path: '/tabview', name: 'TabViewDemo', component: tabviewdemo_1.TabViewDemo },
            { path: '/radiobutton', name: 'RadioButtonDemo', component: radiobuttondemo_1.RadioButtonDemo },
            { path: '/accordion', name: 'AccordionDemo', component: accordiondemo_1.AccordionDemo },
            { path: '/inputtextarea', name: 'InputTextareaDemo', component: inputtextareademo_1.InputTextareaDemo },
            { path: '/galleria', name: 'GalleriaDemo', component: galleriademo_1.GalleriaDemo },
            { path: '/checkbox', name: 'CheckboxDemo', component: checkboxdemo_1.CheckboxDemo },
            { path: '/listbox', name: 'ListboxDemo', component: listboxdemo_1.ListboxDemo },
            { path: '/messages', name: 'MessagesDemo', component: messagesdemo_1.MessagesDemo },
            { path: '/growl', name: 'GrowlDemo', component: growldemo_1.GrowlDemo },
            { path: '/carousel', name: 'CarouselDemo', component: carouseldemo_1.CarouselDemo },
            { path: '/inputswitch', name: 'InputSwitchDemo', component: inputswitchdemo_1.InputSwitchDemo },
            { path: '/selectbutton', name: 'SelectButtonDemo', component: selectbuttondemo_1.SelectButtonDemo },
            { path: '/calendar', name: 'CalendarDemo', component: calendardemo_1.CalendarDemo },
            { path: '/dropdown', name: 'DropdownDemo', component: dropdowndemo_1.DropdownDemo },
            { path: '/progressbar', name: 'ProgressBarDemo', component: progressbardemo_1.ProgressBarDemo },
            { path: '/piechart', name: 'PieChartDemo', component: piechartdemo_1.PieChartDemo },
            { path: '/doughnutchart', name: 'DoughnutChartDemo', component: doughnutchartdemo_1.DoughnutChartDemo },
            { path: '/linechart', name: 'LineChartDemo', component: linechartdemo_1.LineChartDemo },
            { path: '/barchart', name: 'BarChartDemo', component: barchartdemo_1.BarChartDemo },
            { path: '/radarchart', name: 'RadarChartDemo', component: radarchartdemo_1.RadarChartDemo },
            { path: '/polarareachart', name: 'PolarAreaChartDemo', component: polarareachartdemo_1.PolarAreaChartDemo },
            { path: '/menu', name: 'MenuDemo', component: menudemo_1.MenuDemo },
            { path: '/tieredmenu', name: 'TieredMenuDemo', component: tieredmenudemo_1.TieredMenuDemo },
            { path: '/menubar', name: 'MenubarDemo', component: menubardemo_1.MenubarDemo },
            { path: '/slidemenu', name: 'SlideMenuDemo', component: slidemenudemo_1.SlideMenuDemo },
            { path: '/breadcrumb', name: 'BreadcrumbDemo', component: breadcrumbdemo_1.BreadcrumbDemo },
            { path: '/slider', name: 'SliderDemo', component: sliderdemo_1.SliderDemo },
            { path: '/lightbox', name: 'LightboxDemo', component: lightboxdemo_1.LightboxDemo },
            { path: '/paginator', name: 'PaginatorDemo', component: paginatordemo_1.PaginatorDemo },
            { path: '/megamenu', name: 'MegaMenuDemo', component: megamenudemo_1.MegaMenuDemo },
            { path: '/panelmenu', name: 'PanelMenuDemo', component: panelmenudemo_1.PanelMenuDemo },
            { path: '/datatable', name: 'DataTableDemo', component: datatabledemo_1.DataTableDemo },
            { path: '/datatablefacets', name: 'DataTableFacetsDemo', component: datatablefacetsdemo_1.DataTableFacetsDemo },
            { path: '/datatablepaginator', name: 'DataTablePaginatorDemo', component: datatablepaginatordemo_1.DataTablePaginatorDemo },
            { path: '/datatablesort', name: 'DataTableSortDemo', component: datatablesortdemo_1.DataTableSortDemo },
            { path: '/datatableresponsive', name: 'DataTableResponsiveDemo', component: datatableresponsivedemo_1.DataTableResponsiveDemo },
            { path: '/datatableselection', name: 'DataTableSelectionDemo', component: datatableselectiondemo_1.DataTableSelectionDemo },
            { path: '/datatablefilter', name: 'DataTableFilterDemo', component: datatablefilterdemo_1.DataTableFilterDemo },
            { path: '/datatableeditable', name: 'DataTableEditableDemo', component: datatableeditabledemo_1.DataTableEditableDemo },
            { path: '/datatablecolresize', name: 'DataTableColResizeDemo', component: datatablecolresizedemo_1.DataTableColResizeDemo },
            { path: '/datatablecolreorder', name: 'DataTableColReorderDemo', component: datatablecolreorderdemo_1.DataTableColReorderDemo },
            { path: '/datatablescroll', name: 'DataTableScrollDemo', component: datatablescrolldemo_1.DataTableScrollDemo },
            { path: '/datatablegroup', name: 'DataTableGroupDemo', component: datatablegroupdemo_1.DataTableGroupDemo },
            { path: '/datatablelazy', name: 'DataTableLazyDemo', component: datatablelazydemo_1.DataTableLazyDemo },
            { path: '/datatablecrud', name: 'DataTableCrudDemo', component: datatablecruddemo_1.DataTableCrudDemo },
            { path: '/datatabletemplating', name: 'DataTableTemplatingDemo', component: datatabletemplatingdemo_1.DataTableTemplatingDemo },
            { path: '/datatablecontextmenu', name: 'DataTableCMDemo', component: datatablecmdemo_1.DataTableCMDemo },
            { path: '/datatablecoltoggler', name: 'DataTableColTogglerDemo', component: datatablecoltogglerdemo_1.DataTableColTogglerDemo },
            { path: '/codehighlighter', name: 'CodeHighlighterDemo', component: codehighlighterdemo_1.CodeHighlighterDemo },
            { path: '/orderlist', name: 'OrderListDemo', component: orderlistdemo_1.OrderListDemo },
            { path: '/picklist', name: 'PickListDemo', component: picklistdemo_1.PickListDemo },
            { path: '/schedule', name: 'ScheduleDemo', component: scheduledemo_1.ScheduleDemo },
            { path: '/datagrid', name: 'DataGridDemo', component: datagriddemo_1.DataGridDemo },
            { path: '/datalist', name: 'DataListDemo', component: datalistdemo_1.DataListDemo },
            { path: '/datascroller', name: 'DataScrollerDemo', component: datascrollerdemo_1.DataScrollerDemo },
            { path: '/datascrollerinline', name: 'DataScrollerInlineDemo', component: datascrollerinlinedemo_1.DataScrollerInlineDemo },
            { path: '/datascrollerloader', name: 'DataScrollerLoaderDemo', component: datascrollerloaderdemo_1.DataScrollerLoaderDemo },
            { path: '/datascrollerinfinite', name: 'DataScrollerInfiniteDemo', component: datascrollerinfinitedemo_1.DataScrollerInfiniteDemo },
            { path: '/tree', name: 'TreeDemo', component: treedemo_1.TreeDemo },
            { path: '/treetable', name: 'TreeTableDemo', component: treetabledemo_1.TreeTableDemo },
            { path: '/terminal', name: 'TerminalDemo', component: terminaldemo_1.TerminalDemo },
            { path: '/splitbutton', name: 'SplitButtonDemo', component: splitbuttondemo_1.SplitButtonDemo },
            { path: '/overlaypanel', name: 'OverlayPanelDemo', component: overlaypaneldemo_1.OverlayPanelDemo },
            { path: '/autocomplete', name: 'AutoCompleteDemo', component: autocompletedemo_1.AutoCompleteDemo },
            { path: '/editor', name: 'EditorDemo', component: editordemo_1.EditorDemo },
            { path: '/responsive', name: 'ResponsiveDemo', component: responsivedemo_1.ResponsiveDemo },
            { path: '/multiselect', name: 'MultiSelectDemo', component: multiselectdemo_1.MultiSelectDemo },
            { path: '/gmap', name: 'GMapDemo', component: gmapdemo_1.GMapDemo },
            { path: '/contextmenu', name: 'ContextMenuDemo', component: contextmenudemo_1.ContextMenuDemo }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map