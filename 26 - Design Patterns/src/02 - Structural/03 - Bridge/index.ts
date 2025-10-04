import { Radio } from "./device/radio.ts";
import { Tv } from "./device/tv.ts";
import { RemoteControl } from "./remote-control/remote-control.ts";
import { RemoteControlWithVolume } from "./remote-control/remote-control-with-volume.ts";

function clientCode(
	abstraction: RemoteControl | RemoteControlWithVolume,
): void {
	abstraction.togglePower();

	// Type Guard
	if (!("volumeUp" in abstraction)) return;

	abstraction.volumeUp();
	abstraction.volumeUp();
	abstraction.volumeDown();
	abstraction.volumeUp();
}

const tv = new Tv();
const radio = new Radio();

const tvRemoteControl = new RemoteControl(tv);
const radioRemoteControl = new RemoteControlWithVolume(radio);

clientCode(radioRemoteControl);
clientCode(tvRemoteControl);
