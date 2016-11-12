import {Car} from "./model/car";
import {CarSpecification} from "./model/carSpecification";
import {Promise} from 'es6-promise';

export class FactoryService {
    public produce(carSpecification: CarSpecification): Promise<Car> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = (Math.floor(Math.random() * 2) + 1) === 2 ? true : false;
                if (success) {
                    resolve(this.assembleCar(carSpecification));
                    return;
                }

                reject();
            }, 3000);
        });
    }

    private assembleCar(carSpecification: CarSpecification) {
        return new Car(carSpecification);
    }
}