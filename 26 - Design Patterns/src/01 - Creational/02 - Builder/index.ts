import { MainDishBuilder } from "./classes/main-dish-builder.ts";
import { MealBox } from "./classes/meal-box.ts";
import { Beans, Meat, Rice } from "./classes/meals.ts";
import { VeganDishBuilder } from "./classes/vegan-dish-builder.ts";

const rice = new Rice('Rice', 5);
const beans = new Beans('Beans', 10);
const meat = new Meat('Meat', 20);

const mealBox = new MealBox();

mealBox.add(rice,beans,meat)

const mainDishBuilder = new MainDishBuilder();
const mainDish1 = mainDishBuilder.makeBeverage().makeDessert().makeMeal().getMeal()

mainDishBuilder.reset()
mainDishBuilder.makeBeverage()
console.log(mainDishBuilder.getPrice())
console.log(mainDish1.getPrice())

const veganDishBuilder = new VeganDishBuilder()
veganDishBuilder.makeMeal()
console.log(veganDishBuilder.getPrice())

