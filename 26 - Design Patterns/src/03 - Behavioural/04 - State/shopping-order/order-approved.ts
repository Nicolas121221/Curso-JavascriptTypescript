import type { ShoppingOrder } from "./shopping-order.ts";
import type { ShoppingOrderState } from "./shopping-order-state.ts";
import { OrderPending } from "./order-pending.ts";
import { OrderRejected } from "./order-rejected.ts";

export class OrderApproved implements ShoppingOrderState {
	private name = "OrderApproved";

	constructor(private order: ShoppingOrder) {}

	getName(): string {
		return this.name;
	}

	approvePayment(): void {
		console.log("Your order is already approved.");
	}
	rejectPayment(): void {
		this.order.setState(new OrderRejected(this.order));
	}
	waitPayment(): void {
		this.order.setState(new OrderPending(this.order));
	}
	shipOrder(): void {
		console.log("sending your order...");
	}
}
