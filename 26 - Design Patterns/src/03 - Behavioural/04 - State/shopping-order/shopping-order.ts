import { OrderPending } from "./order-pending.ts";
import type { ShoppingOrderState } from "./shopping-order-state.ts";

export class ShoppingOrder {
	private state: ShoppingOrderState = new OrderPending(this);

	getState(): ShoppingOrderState {
		return this.state;
	}

	setState(state: ShoppingOrderState): void {
		this.state = state;
		console.log(`Your order is currently in the state ${state.getName()}.`);
	}

	getStateName(): string {
		return this.state.getName();
	}

	approvePayment(): void {
		this.state.approvePayment();
	}

	rejectPayment(): void {
		this.state.rejectPayment();
	}

	waitPayment(): void {
		this.state.waitPayment();
	}

	shipOrder(): void {
		this.state.shipOrder();
	}
}
