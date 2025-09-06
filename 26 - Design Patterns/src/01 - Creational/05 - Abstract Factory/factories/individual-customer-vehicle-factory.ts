import type { CustomerProtocol } from "../customer/customer.ts";
import { IndividualCustomer } from "../customer/individual-customer.ts";
import { IndividualCar } from "../vehicle/individual-car.ts";
import type { VehicleProtocol } from "../vehicle/vehicle.ts";
import type { CreateVehicleCustomer } from "./customer-vehicle-factory.ts";

export class IndividualVehicleCustomerFactory implements CreateVehicleCustomer {
	createCustomer(customerName: string): CustomerProtocol {
		return new IndividualCustomer(customerName);
	}
	createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
		const customer = this.createCustomer(customerName);
		return new IndividualCar(vehicleName, customer);
	}
}
