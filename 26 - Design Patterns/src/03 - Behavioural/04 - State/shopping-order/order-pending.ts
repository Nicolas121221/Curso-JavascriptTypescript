import type { ShoppingOrder } from "./shopping-order.ts";
import type { ShoppingOrderState } from "./shopping-order-state.ts";
import { OrderApproved } from "./order-approved.ts";
import { OrderRejected } from "./order-rejected.ts";

export class OrderPending implements ShoppingOrderState {
	private name = "OrderPending";

	constructor(private order: ShoppingOrder) {}

	getName(): string {
		return this.name;
	}

	approvePayment(): void {
		this.order.setState(new OrderApproved(this.order));
	}
	rejectPayment(): void {
		this.order.setState(new OrderRejected(this.order));
	}
	waitPayment(): void {
		console.log("Your order is already pending.");
	}
	shipOrder(): void {
		console.log(
			"Your order can't be approved because your payment while your order is pending.",
		);
	}
}
