import {Car} from "./model/car";

export class DeliveryService {
    public deliverCar(car: Car): void {
        car.print();
    }
}