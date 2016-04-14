import { OnInit } from 'angular2/core';
import { Car } from '../domain/car';
import { CarService } from '../service/carservice';
import { Message } from '../../../components/api/message';
export declare class DataTableTemplatingDemo implements OnInit {
    private carService;
    cars: Car[];
    msgs: Message[];
    constructor(carService: CarService);
    ngOnInit(): void;
    selectCar(car: Car): void;
}
