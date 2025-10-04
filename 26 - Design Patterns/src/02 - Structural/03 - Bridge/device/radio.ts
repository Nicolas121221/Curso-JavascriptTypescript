import type { DeviceImplementation } from "./device-implementation.ts";

export class Radio implements DeviceImplementation {
	private volume: number = 10;
	private power: boolean = false;
	private name = "Radio";

	getName(): string {
		return this.name;
	}
	getPower(): boolean {
		return this.power;
	}
	getVolume(): number {
		return this.volume;
	}

	setPower(powerStatus: boolean): void {
		this.power = powerStatus;
	}

	setVolume(volume: number): void {
		if (volume < 0) return;
		if (volume > 100) return;
		this.volume = volume;
	}
}
