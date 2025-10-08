import type { SmartHouseCommand } from "./command.ts";
import type { SmartHouseLight } from "./smart-house-light.ts";

export class LightPowerCommand implements SmartHouseCommand {
	constructor(private readonly light: SmartHouseLight) {}

	execute(): void {
		this.light.on();
	}

	undo(): void {
		this.light.off();
	}
}
