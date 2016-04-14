import { Message } from '../../../components/api/message';
import { Car } from '../domain/car';
export declare class CarouselDemo {
    cars: Car[];
    msgs: Message[];
    constructor();
    selectCar(car: Car): void;
}
