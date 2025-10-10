import type { TaxVisitorProtocol } from "./tax-visitor-protocol.ts";
import { VisitableProduct } from "./visitable-product.ts";

export class AlcoholicDrink extends VisitableProduct {
	constructor(protected price: number) {
		super("Alcoholic Drink", price);
	}

	getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
		return visitor.calculateTaxesForAlcoholicDrink(this);
	}
}
