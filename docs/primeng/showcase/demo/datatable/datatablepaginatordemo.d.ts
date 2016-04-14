import { OnInit } from 'angular2/core';
import { Car } from '../domain/car';
import { CarService } from '../service/carservice';
export declare class DataTablePaginatorDemo implements OnInit {
    private carService;
    cars: Car[];
    constructor(carService: CarService);
    ngOnInit(): void;
}
