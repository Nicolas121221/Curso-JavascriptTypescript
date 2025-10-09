import type { ShoppingOrder } from "./shopping-order.ts";
import type { ShoppingOrderState } from "./shopping-order-state.ts";

export class OrderRejected implements ShoppingOrderState {
	private name = "OrderRejected";

	constructor(private order: ShoppingOrder) {}

	getName(): string {
		return this.name;
	}

	approvePayment(): void {
		console.log("Your order can't be approved because it was rejected.");
	}
	rejectPayment(): void {
		console.log("Your order can't be rejected because it was rejected.");
	}
	waitPayment(): void {
		console.log(
			"Your order can't be set to pending because it was rejected.",
		);
	}
	shipOrder(): void {
		console.log("Your order can't be completed because it was rejected.");
	}
}
