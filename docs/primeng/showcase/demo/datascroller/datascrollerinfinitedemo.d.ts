import { Car } from '../domain/car';
import { CarService } from '../service/carservice';
import { Message } from '../../../components/api/message';
export declare class DataScrollerInfiniteDemo {
    private carService;
    cars: Car[];
    msgs: Message[];
    constructor(carService: CarService);
    loadData(event: any): void;
}
