import { DiscountStrategy } from "./discount-strategy.ts";
import type { ECommerceShoppingCart } from "./ecommerce-shopping-cart.ts";

export class NewDiscount extends DiscountStrategy {
	protected discount = 0;

	getDiscount(cart: ECommerceShoppingCart): number {
		const total = cart.getTotal();

		if (total >= 150) {
			this.discount = 5;
		}

		return total - total * (this.discount / 100);
	}
}
