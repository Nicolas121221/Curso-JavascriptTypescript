import type { CustomerProtocol } from "./customer.ts";

export class IndividualCustomer implements CustomerProtocol {
	constructor(public name: string) {
        this.name += ' (INDIVIDUAL)'
    }
}
