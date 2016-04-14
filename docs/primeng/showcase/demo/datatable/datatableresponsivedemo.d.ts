import { OnInit } from 'angular2/core';
import { Car } from '../domain/car';
import { CarService } from '../service/carservice';
export declare class DataTableResponsiveDemo implements OnInit {
    private carService;
    cars: Car[];
    stacked: boolean;
    constructor(carService: CarService);
    ngOnInit(): void;
    toggle(): void;
}
