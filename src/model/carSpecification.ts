import {CarType} from "./carType";

export interface CarSpecification {
    name: string;
    type: CarType;
    horsePower: number;
    topSpeed: number;
    fuelEconomy: string;
}