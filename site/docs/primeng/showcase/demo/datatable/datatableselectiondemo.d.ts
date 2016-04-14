import { OnInit } from 'angular2/core';
import { Car } from '../domain/car';
import { CarService } from '../service/carservice';
import { Message } from '../../../components/api/message';
export declare class DataTableSelectionDemo implements OnInit {
    private carService;
    msgs: Message[];
    cars: Car[];
    selectedCar1: Car;
    selectedCar2: Car;
    selectedCars: Car[];
    constructor(carService: CarService);
    ngOnInit(): void;
    onRowSelect(event: any): void;
    onRowUnselect(event: any): void;
}
