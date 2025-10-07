import type { ECommerceShoppingCart } from "./ecommerce-shopping-cart.ts";

export class DiscountStrategy {
	protected discount = 0;

	getDiscount(cart: ECommerceShoppingCart): number {
		return cart.getTotal();
	}
}
