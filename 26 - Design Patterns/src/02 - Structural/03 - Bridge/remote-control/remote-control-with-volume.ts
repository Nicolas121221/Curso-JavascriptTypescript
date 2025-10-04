import { RemoteControl } from "./remote-control.ts";

export class RemoteControlWithVolume extends RemoteControl {
	volumeUp(): void {
		const oldVolume = this.device.getVolume();
		this.device.setVolume(this.device.getVolume() + 10);
		console.log(
			`${
				this.device.getName()
			} had ${oldVolume} volume and now has ${this.device.getVolume()}`,
		);
	}

	volumeDown(): void {
		const oldVolume = this.device.getVolume();
		this.device.setVolume(this.device.getVolume() - 10);
		console.log(
			`${
				this.device.getName()
			} had ${oldVolume} volume and now has ${this.device.getVolume()}`,
		);
	}
}
