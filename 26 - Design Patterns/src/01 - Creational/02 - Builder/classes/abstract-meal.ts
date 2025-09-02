import type { MealCompositeProtocol } from "../interfaces/meal-composite-protocol.ts";

export abstract class AbstractMeal implements MealCompositeProtocol {
    constructor(private name: string, private price: number) {}

    getPrice(): number {
        return this.price;
    }
}
