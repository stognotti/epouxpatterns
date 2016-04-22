System.register(["angular2/core", 'primeng/primeng'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, primeng_1;
    var ButtonPreview1Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (primeng_1_1) {
                primeng_1 = primeng_1_1;
            }],
        execute: function() {
            ButtonPreview1Component = (function () {
                function ButtonPreview1Component() {
                }
                ButtonPreview1Component = __decorate([
                    core_1.Component({
                        selector: 'button-preview-1-component',
                        template: "\n\t    <style type=\"text/css\">\n.ui-widget { font-family: FontAwesome; font-size: 25px; }\n\n\n   \n.ui-button, button.ui-button.ui-state-default, .ui-button.ui-state-default {\n\tborder: 1px solid #168dd9;\n\tcolor: #FFFFFF;\n\tbox-shadow: 0 1px 0 #53bcff inset, 0 1px 2px rgba(0,0,0,0.2) !important;\n\tbackground: #F00000; /* Old browsers */\n\tbackground: -moz-linear-gradient(top, #3183BC 0%, #3183BC 100%); /* FF3.6+ */\n\tbackground: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#FFFFFF), color-stop(100%,#000000)); /* Chrome,Safari4+ */\n\tbackground: -webkit-linear-gradient(top, #FFFFFF 0%,#3183BC 100%); /* Chrome10+,Safari5.1+ */\n\tbackground: -o-linear-gradient(top, #3183BC 0%,#3183BC 100%); /* Opera11.10+ */\n\tbackground: -ms-linear-gradient(top, #3183BC 0%,#3183BC 100%); /* IE10+ */\n\tbackground: linear-gradient(top, #3183BC 0%,#3183BC 100%); /* W3C */\n\t-webkit-transition: none;\n\t-moz-transition: none;\n\t-o-transition: none;\n}\nbutton.ui-button.ui-state-hover, .ui-button.ui-state-hover,\nbutton.ui-button.ui-state-focus {\n\tborder: 1px solid #0c6aa6;\n\tbox-shadow: 0 1px 0 #58b3ff inset, 0 1px 2px rgba(0,0,0,0.2) !important;\n\tbackground: #279cff; /* Old browsers */\n\tbackground: -moz-linear-gradient(top, #279cff 0%, #058dff 100%); /* FF3.6+ */\n\tbackground: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#279cff), color-stop(100%,#058dff)); /* Chrome,Safari4+ */\n\tbackground: -webkit-linear-gradient(top, #279cff 0%,#058dff 100%); /* Chrome10+,Safari5.1+ */\n\tbackground: -o-linear-gradient(top, #279cff 0%,#058dff 100%); /* Opera11.10+ */\n\tbackground: -ms-linear-gradient(top, #279cff 0%,#058dff 100%); /* IE10+ */\n\tbackground: linear-gradient(top, #279cff 0%,#058dff 100%); /* W3C */\n\toutline: 0 none;\n}\n</style>\n        <button pButton type=\"button\" label=\"Submit 3\"  class=\u00A8my-button\u00A8 ></button>\n\n    ",
                        styles: ["\n\n    "],
                        directives: [primeng_1.Button]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ButtonPreview1Component);
                return ButtonPreview1Component;
            }());
            exports_1("ButtonPreview1Component", ButtonPreview1Component);
        }
    }
});
//# sourceMappingURL=buttonpreview1component.1.js.map