import type { SmartHouseCommand } from "./command.ts";
import type { SmartHouseLight } from "./smart-house-light.ts";

export class LightIntensityCommand implements SmartHouseCommand {
	constructor(private readonly light: SmartHouseLight) {}

	execute(): void {
		const intensity = this.light.increaseIntensity();
		console.log(`the intensity of ${this.light.name} is ${intensity}`);
	}

	undo(): void {
		const intensity = this.light.decreaseIntensity();
		console.log(`the intensity of ${this.light.name} is ${intensity}`);
	}
}
