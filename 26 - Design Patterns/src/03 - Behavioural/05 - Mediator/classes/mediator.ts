import type { SellerProduct } from "./seller-product";
import type { Seller } from "./seller.ts";

export class Mediator {
	private sellers: Seller[] = [];

	addSeller(...sellers: Seller[]): void {
		sellers.forEach((seller) => {
			this.sellers.push(seller);
			seller.setMediator(this);
		});
	}

	buy(id: string): SellerProduct | void {
		let product: SellerProduct | void;

		for (let i = 0; i < this.sellers.length; i++) {
			product = this.sellers[i]?.sell(id);

			if (product) {
				console.log(
					"Here it is: ",
					product.id,
					product.name,
					product.price,
				);
				return;
			}
		}

		console.log("Product not found.");
	}

	showProducts(): void {
		this.sellers.forEach((seller) => seller.showProducts());
	}
}
