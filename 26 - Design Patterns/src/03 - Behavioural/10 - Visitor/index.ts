import { AlcoholicDrink } from "./classes/alcoholic-drink.ts";
import { BrazilTaxVisitor } from "./classes/brazil-tax-visitor.ts";
import { Cigarette } from "./classes/cigarette.ts";
import { Food } from "./classes/food.ts";
import { USTaxVisitor } from "./classes/us-tax-visitor.ts";

const food = new Food(10);
const cigarette = new Cigarette(5);
const alcoholicDrink = new AlcoholicDrink(5);

const brazilTaxVisitor = new BrazilTaxVisitor();
const usTaxVisitor = new USTaxVisitor();

const cart = [food, cigarette, alcoholicDrink];
const total = cart.reduce((sum, item) => item.getPrice() + sum, 0);
const totalWithTaxesBrazil = cart.reduce(
	(sum, item) => item.getPriceWithTaxes(brazilTaxVisitor) + sum,
	0,
);

const totalWithTaxesUS = cart.reduce(
	(sum, item) => item.getPriceWithTaxes(usTaxVisitor) + sum,
	0,
);
console.log(total, totalWithTaxesBrazil, totalWithTaxesUS);
