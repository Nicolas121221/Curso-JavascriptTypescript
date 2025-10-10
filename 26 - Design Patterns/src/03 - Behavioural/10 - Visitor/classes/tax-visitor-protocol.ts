import type { AlcoholicDrink } from "./alcoholic-drink.ts";
import type { Cigarette } from "./cigarette.ts";
import type { Food } from "./food.ts";

export interface TaxVisitorProtocol {
	calculateTaxesForFood(food: Food): number;
	calculateTaxesForCigarette(cigarette: Cigarette): number;
	calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number;
}
