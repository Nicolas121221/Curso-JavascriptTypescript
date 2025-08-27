import { OrderStatus } from "./interfaces/order-status";
import { ShoppingCart } from "./shopping-cart";
import { Messaging } from "../services/messaging";
import { Persistency } from "../services/persistency";

export class Order {
	private _orderStatus: OrderStatus = "open";

	constructor(
		private readonly cart: ShoppingCart,
		private readonly messaging: Messaging,
		private readonly persistency: Persistency,
	) {}

	get orderStatus(): OrderStatus {
		return this._orderStatus;
	}

	checkout(): void {
		if (this.cart.isEmpty()) {
			console.log("Your cart is empty");
			return;
		}

		this._orderStatus = "closed";
		this.messaging.sendMessage(
			`Your order has a total of ${this.cart
				.total()
				.toLocaleString("pt-BR", {
					style: "currency",
					currency: "BRL",
				})} and it is being executed`,
		);
		this.persistency.saveOrder();
		this.cart.clear();
	}
}
