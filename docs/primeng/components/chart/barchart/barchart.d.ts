import { ElementRef, AfterViewInit, OnDestroy, DoCheck, EventEmitter, IterableDiffers } from 'angular2/core';
export declare class BarChart implements AfterViewInit, OnDestroy, DoCheck {
    private el;
    animation: boolean;
    animationSteps: number;
    animationEasing: string;
    showScale: boolean;
    scaleOverride: boolean;
    scaleSteps: number;
    scaleStepWidth: number;
    scaleStartValue: number;
    scaleLineColor: string;
    scaleLineWidth: number;
    scaleShowLabels: boolean;
    scaleLabel: string;
    scaleIntegersOnly: boolean;
    scaleFontFamily: string;
    scaleFontSize: number;
    scaleFontStyle: string;
    scaleFontColor: string;
    responsive: boolean;
    maintainAspectRatio: boolean;
    showTooltips: boolean;
    tooltipFillColor: string;
    tooltipFontFamily: string;
    tooltipFontSize: number;
    tooltipFontStyle: string;
    tooltipFontColor: string;
    tooltipTitleFontFamily: string;
    tooltipTitleFontSize: number;
    tooltipTitleFontStyle: string;
    tooltipTitleFontColor: string;
    tooltipYPadding: number;
    tooltipXPadding: number;
    tooltipCaretSize: number;
    tooltipCornerRadius: number;
    tooltipXOffset: number;
    tooltipTemplate: string;
    multiTooltipTemplate: string;
    value: any;
    width: string;
    height: string;
    scaleBeginAtZero: boolean;
    scaleShowGridLines: boolean;
    scaleGridLineColor: string;
    scaleGridLineWidth: number;
    scaleShowHorizontalLines: boolean;
    scaleShowVerticalLines: boolean;
    barShowStroke: boolean;
    barStrokeWidth: number;
    barValueSpacing: number;
    barDatasetSpacing: number;
    legend: any;
    legendTemplate: string;
    onBarsSelect: EventEmitter<any>;
    initialized: boolean;
    chart: any;
    differ: any;
    constructor(el: ElementRef, differs: IterableDiffers);
    ngAfterViewInit(): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
    onCanvasClick(event: any): void;
    initChart(): void;
    getCanvas(): any;
    getBase64Image(): any;
}
