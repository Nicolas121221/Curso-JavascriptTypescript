import type { TaxVisitorProtocol } from "./tax-visitor-protocol.ts";
import { VisitableProduct } from "./visitable-product.ts";

export class Food extends VisitableProduct {
	constructor(protected price: number) {
		super("Food", price);
	}

	getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
		return visitor.calculateTaxesForFood(this);
	}
}
