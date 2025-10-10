import type { AlcoholicDrink } from "./alcoholic-drink";
import type { Cigarette } from "./cigarette";
import type { Food } from "./food";
import type { TaxVisitorProtocol } from "./tax-visitor-protocol.ts";

export class BrazilTaxVisitor implements TaxVisitorProtocol {
	calculateTaxesForFood(food: Food): number {
		return food.getPrice() + food.getPrice() * 0.05;
	}
	calculateTaxesForCigarette(cigarette: Cigarette): number {
		return cigarette.getPrice() + cigarette.getPrice() * 1.5;
	}
	calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number {
		return alcoholicDrink.getPrice() + alcoholicDrink.getPrice() * 0.5;
	}
}
