import {FactoryService} from "./factoryService";
import {CarType} from "./model/carType";
import {DeliveryService} from "./deliveryService";

const factoryService = new FactoryService();
const deliveryService = new DeliveryService();

console.log('application loaded, starting to produce...');

const carsToProduce = [
    {name: 'Mazda CX-3', type: CarType.FAMILY, horsePower: 90, topSpeed: 190, fuelEconomy: '5.0L'},
    {name: 'Mazda CX-5', type: CarType.FAMILY, horsePower: 130, topSpeed: 220, fuelEconomy: '5.5L'},
    {name: 'Mazda 3', type: CarType.SEDAN, horsePower: 130, topSpeed: 220, fuelEconomy: '5.5L'},
    {name: 'Mazda 6', type: CarType.SEDAN, horsePower: 150, topSpeed: 240, fuelEconomy: '5.8L'},
    {name: 'MX-5 RF', type: CarType.SPORT, horsePower: 180, topSpeed: 240, fuelEconomy: '5.8L'}
];

carsToProduce.forEach(car => {
    factoryService.produce(car)
        .then(producedCar => {
            deliveryService.deliverCar(producedCar);
        })
        .catch(() => {
            deliveryService.reportFailure();
        });
});