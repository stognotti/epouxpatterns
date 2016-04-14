import { OnInit } from 'angular2/core';
import { Car } from '../domain/car';
import { CarService } from '../service/carservice';
import { Message } from '../../../components/api/message';
export declare class DataTableCMDemo implements OnInit {
    private carService;
    msgs: Message[];
    cars: Car[];
    selectedCar: Car;
    constructor(carService: CarService);
    ngOnInit(): void;
    viewCar(car: Car): void;
    deleteCar(car: Car): void;
}
