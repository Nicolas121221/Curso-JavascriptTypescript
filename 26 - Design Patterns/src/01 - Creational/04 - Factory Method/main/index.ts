import { CarFactory } from "../factories/car-factory.ts";
import { randomNumbers } from "../utils/random-numbers.ts";
import { randomCarAlgorithm } from "./random-vehicle-algorithm.ts";

const carFactory = new CarFactory();
const fusca = carFactory.getVehicle("fusca");
fusca.pickUp("Joana");
fusca.stop();

const customerNames = ["Ana", "Joana", "Helena", "Maria", "João"];

for (let i = 0; i < 10; i++) {
    console.log("-----".repeat(10))
	const vehicle = randomCarAlgorithm();
	const name = customerNames[randomNumbers(customerNames.length)] as string;

	vehicle?.pickUp(name);
	vehicle?.stop();

    const newCar = carFactory.pickUp(name, `new car - ${randomNumbers(100)}`)
    newCar.stop()
}
