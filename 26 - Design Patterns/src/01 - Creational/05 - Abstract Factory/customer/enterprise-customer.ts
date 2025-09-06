import type { CustomerProtocol } from "./customer.ts";

export class EnterpriseCustomer implements CustomerProtocol {
	constructor(public name: string) {
        this.name += ' (ENTERPRISE)'
    }
}
