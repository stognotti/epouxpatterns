System.register(['angular2/platform/browser', './buttonpreview1component', './buttonpreview2component', './buttonpreview3component', './buttonpreview4component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, buttonpreview1component_1, buttonpreview2component_1, buttonpreview3component_1, buttonpreview4component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (buttonpreview1component_1_1) {
                buttonpreview1component_1 = buttonpreview1component_1_1;
            },
            function (buttonpreview2component_1_1) {
                buttonpreview2component_1 = buttonpreview2component_1_1;
            },
            function (buttonpreview3component_1_1) {
                buttonpreview3component_1 = buttonpreview3component_1_1;
            },
            function (buttonpreview4component_1_1) {
                buttonpreview4component_1 = buttonpreview4component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(buttonpreview1component_1.ButtonPreview1Component);
            browser_1.bootstrap(buttonpreview2component_1.ButtonPreview2Component);
            browser_1.bootstrap(buttonpreview3component_1.ButtonPreview3Component);
            browser_1.bootstrap(buttonpreview4component_1.ButtonPreview4Component);
        }
    }
});
//# sourceMappingURL=boot.js.map