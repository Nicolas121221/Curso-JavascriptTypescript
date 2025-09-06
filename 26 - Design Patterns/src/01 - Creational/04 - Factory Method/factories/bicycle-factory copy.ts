import { Bicycle } from "../vehicles/bicycle.ts";
import type { Vehicle } from "../vehicles/vehicle.ts";
import { VehicleFactory } from "./vehicle-factory.ts";

export class BicycleFactory extends VehicleFactory {
	getVehicle(vehicleName: string): Vehicle {
		return new Bicycle(vehicleName);
	}
}
