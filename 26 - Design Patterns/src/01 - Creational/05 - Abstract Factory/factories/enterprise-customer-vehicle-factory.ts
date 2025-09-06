import type { CustomerProtocol } from "../customer/customer.ts";
import { EnterpriseCustomer } from "../customer/enterprise-customer.ts";
import { EnterpriseCar } from "../vehicle/enterprise-car.ts";
import type { VehicleProtocol } from "../vehicle/vehicle.ts";
import type { CreateVehicleCustomer } from "./customer-vehicle-factory.ts";

export class EnterpriseVehicleCustomerFactory implements CreateVehicleCustomer {
	createCustomer(customerName: string): CustomerProtocol {
		return new EnterpriseCustomer(customerName);
	}
	createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
		const customer = this.createCustomer(customerName);
		return new EnterpriseCar(vehicleName, customer);
	}
}
