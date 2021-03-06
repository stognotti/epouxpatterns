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
var http_1 = require('angular2/http');
var schedule_1 = require('../../../components/schedule/schedule');
var codehighlighter_1 = require('../../../components/codehighlighter/codehighlighter');
var tabview_1 = require('../../../components/tabview/tabview');
var tabpanel_1 = require('../../../components/tabview/tabpanel');
var calendar_1 = require('../../../components/calendar/calendar');
var button_1 = require('../../../components/button/button');
var inputtext_1 = require('../../../components/inputtext/inputtext');
var dialog_1 = require('../../../components/dialog/dialog');
var checkbox_1 = require('../../../components/checkbox/checkbox');
var eventservice_1 = require('../service/eventservice');
var router_1 = require('angular2/router');
var ScheduleDemo = (function () {
    function ScheduleDemo(eventService, cd) {
        this.eventService = eventService;
        this.cd = cd;
        this.dialogVisible = false;
        this.idGen = 100;
    }
    ScheduleDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.eventService.getEvents().then(function (events) { _this.events = events; });
        this.header = {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        };
    };
    ScheduleDemo.prototype.handleDayClick = function (event) {
        this.event = new MyEvent();
        this.event.start = event.date.format();
        this.dialogVisible = true;
        //trigger detection manually as somehow only moving the mouse quickly after click triggers the automatic detection
        this.cd.detectChanges();
    };
    ScheduleDemo.prototype.handleEventClick = function (e) {
        this.event = new MyEvent();
        this.event.title = e.calEvent.title;
        var start = e.calEvent.start;
        var end = e.calEvent.end;
        if (e.view.name === 'month') {
            start.stripTime();
        }
        if (end) {
            end.stripTime();
            this.event.end = end.format();
        }
        this.event.id = e.calEvent.id;
        this.event.start = start.format();
        this.event.allDay = e.calEvent.allDay;
        this.dialogVisible = true;
    };
    ScheduleDemo.prototype.saveEvent = function () {
        //update
        if (this.event.id) {
            var index = this.findEventIndexById(this.event.id);
            if (index >= 0) {
                this.events[index] = this.event;
            }
        }
        else {
            this.event.id = this.idGen;
            this.events.push(this.event);
            this.event = null;
        }
        this.dialogVisible = false;
    };
    ScheduleDemo.prototype.deleteEvent = function () {
        var index = this.findEventIndexById(this.event.id);
        if (index >= 0) {
            this.events.splice(index, 1);
        }
        this.dialogVisible = false;
    };
    ScheduleDemo.prototype.findEventIndexById = function (id) {
        var index = -1;
        for (var i = 0; i < this.events.length; i++) {
            if (id == this.events[i].id) {
                index = i;
                break;
            }
        }
        return index;
    };
    ScheduleDemo = __decorate([
        core_1.Component({
            templateUrl: 'showcase/demo/schedule/scheduledemo.html',
            directives: [schedule_1.Schedule, button_1.Button, inputtext_1.InputText, calendar_1.Calendar, dialog_1.Dialog, checkbox_1.Checkbox, tabpanel_1.TabPanel, tabview_1.TabView, button_1.Button, codehighlighter_1.CodeHighlighter, router_1.ROUTER_DIRECTIVES],
            providers: [http_1.HTTP_PROVIDERS, eventservice_1.EventService],
            styles: ["\n        .ui-grid-row div {\n          padding: 4px 10px\n        }\n        \n        .ui-grid-row div label {\n          font-weight: bold;\n        }\n  "]
        }), 
        __metadata('design:paramtypes', [eventservice_1.EventService, core_1.ChangeDetectorRef])
    ], ScheduleDemo);
    return ScheduleDemo;
}());
exports.ScheduleDemo = ScheduleDemo;
var MyEvent = (function () {
    function MyEvent() {
        this.allDay = true;
    }
    return MyEvent;
}());
exports.MyEvent = MyEvent;
//# sourceMappingURL=scheduledemo.js.map