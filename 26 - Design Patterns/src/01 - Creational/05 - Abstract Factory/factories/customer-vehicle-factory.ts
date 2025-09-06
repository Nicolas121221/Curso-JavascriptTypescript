import type { CustomerProtocol } from "../customer/customer.ts";
import type { VehicleProtocol } from "../vehicle/vehicle.ts";

export interface CreateVehicleCustomer {
	createCustomer(customerName: string): CustomerProtocol;
	createVehicle(vehicleName: string, customerName: string): VehicleProtocol;
}
