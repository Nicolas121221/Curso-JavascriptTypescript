import type { DeviceImplementation } from "../device/device-implementation.ts";

export class RemoteControl {
	constructor(protected device: DeviceImplementation) {}

	togglePower(): void {
		this.device.setPower(!this.device.getPower());
        console.log(`\n${this.device.getName()} power status: ${this.device.getPower()}`)
	}
}
