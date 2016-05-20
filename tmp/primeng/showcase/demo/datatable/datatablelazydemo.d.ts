import { OnInit } from 'angular2/core';
import { Car } from '../domain/car';
import { CarService } from '../service/carservice';
import { LazyLoadEvent } from '../../../components/api/lazyload';
export declare class DataTableLazyDemo implements OnInit {
    private carService;
    datasource: Car[];
    cars: Car[];
    totalRecords: number;
    constructor(carService: CarService);
    ngOnInit(): void;
    loadCarsLazy(event: LazyLoadEvent): void;
}
