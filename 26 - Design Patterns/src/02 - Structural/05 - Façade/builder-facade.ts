import { MainDishBuilder } from "../../01 - Creational/02 - Builder/classes/main-dish-builder.ts";
import { VeganDishBuilder } from "../../01 - Creational/02 - Builder/classes/vegan-dish-builder.ts";

export class BuilderFacade {
	// ! This is the façade to the folder src/01 - Creational/02 - Builder/index.ts
	private mainDishBuilder = new MainDishBuilder();
	private veganDishBuilder = new VeganDishBuilder();

	makeMeal1(): void {
		this.mainDishBuilder.makeMeal();
		console.log(this.mainDishBuilder.getMeal());
		console.log(this.mainDishBuilder.getPrice());
	}

	makeMeal2(): void {
		this.mainDishBuilder.reset();
		const meal2 = this.mainDishBuilder.makeBeverage().getMeal();
		console.log(meal2);
	}

	makeMeal3(): void {
		const veganMeal = this.veganDishBuilder.makeMeal().getMeal();
		console.log(veganMeal);
		console.log(veganMeal.getPrice());
	}
}
