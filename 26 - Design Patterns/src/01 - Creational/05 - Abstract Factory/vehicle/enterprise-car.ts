import type { CustomerProtocol } from "../customer/customer.ts";
import type { VehicleProtocol } from "./vehicle.ts";

export class EnterpriseCar implements VehicleProtocol {
	constructor(
		public name: string,
		private readonly Customer: CustomerProtocol,
	) {}

	pickUp(): void {
		console.log(`(ENTERPRISE) ${this.name} is going to${this.Customer.name}`);
	}
}
