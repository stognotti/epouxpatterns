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
    var ButtonPreview2Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (primeng_1_1) {
                primeng_1 = primeng_1_1;
            }],
        execute: function() {
            ButtonPreview2Component = (function () {
                function ButtonPreview2Component() {
                }
                ButtonPreview2Component = __decorate([
                    core_1.Component({
                        selector: 'button-preview-2-component',
                        template: "\n        <button pButton type=\"button\" label=\"Click\"></button>\n    ",
                        directives: [primeng_1.Button]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ButtonPreview2Component);
                return ButtonPreview2Component;
            }());
            exports_1("ButtonPreview2Component", ButtonPreview2Component);
        }
    }
});
//# sourceMappingURL=buttonpreview2component.js.map