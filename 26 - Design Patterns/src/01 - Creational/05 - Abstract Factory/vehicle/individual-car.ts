import type { CustomerProtocol } from "../customer/customer.ts";
import type { VehicleProtocol } from "./vehicle.ts";

export class IndividualCar implements VehicleProtocol {
	constructor(
		public name: string,
		private readonly Customer: CustomerProtocol,
	) {}

	pickUp(): void {
		console.log(`(INDIVIDUAL) ${this.name} is going to ${this.Customer.name}`);
	}
}
