import {Car} from "./model/car";

export class DeliveryService {
    public deliverCar(car: Car): void {
        car.print();
    }

    public reportFailure(message = `Something went wrong producing`) {
        console.log(`Message: ${message}`);
    }
}