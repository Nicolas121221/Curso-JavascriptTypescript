import { BicycleFactory } from "../factories/bicycle-factory copy.ts";
import { CarFactory } from "../factories/car-factory.ts";
import { randomNumbers } from "../utils/random-numbers.ts";
import type { Vehicle } from "../vehicles/vehicle.ts";

export function randomCarAlgorithm(): Vehicle | undefined {
	const carFactory = new CarFactory();
	const bicycleFactory = new BicycleFactory();

	const car1 = carFactory.getVehicle("fusca");
	const car2 = carFactory.getVehicle("celta preto");
	const bicycle = bicycleFactory.getVehicle("Bicycle");
	const cars = [car1, car2, bicycle];

	return cars[randomNumbers(cars.length)] as Vehicle;
}
