import {CarType} from "./carType";
import {CarSpecification} from "./carSpecification";

export class Car {
    id: number;
    name: string;
    type: CarType;
    horsePower: number;
    topSpeed: number;
    fuelEconomy: string;

    constructor(carSpecification: CarSpecification) {
        this.id = Date.now();
        this.name = carSpecification.name;
        this.type = carSpecification.type;
        this.horsePower = carSpecification.horsePower;
        this.topSpeed = carSpecification.topSpeed;
        this.fuelEconomy = carSpecification.fuelEconomy;
    }

    print() {
        console.log(`
            id: ${this.id}
            name: ${this.name}
            type: ${this.type}
            horsePower: ${this.horsePower}
            topSpeed: ${this.horsePower}
            fuelEconomy: ${this.fuelEconomy}
        `);
    }
}