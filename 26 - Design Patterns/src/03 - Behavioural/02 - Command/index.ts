import { LightIntensityCommand } from "./classes/light-intensity-command.ts";
import { LightPowerCommand } from "./classes/light-power-command.ts";
import { SmartHouseApp } from "./classes/smart-house-app.ts";
import { SmartHouseLight } from "./classes/smart-house-light.ts";

// Receiver
const bedroomLight = new SmartHouseLight("Bedroom Light");
const bathroomLight = new SmartHouseLight("Bathroom Light");

// Command
const bedroomLightPowerCommand = new LightPowerCommand(bedroomLight);
const bedroomIntensityCommand = new LightIntensityCommand(bedroomLight);
const bathroomlightPowerCommand = new LightPowerCommand(bathroomLight);

// invoker
const smartHouseApp = new SmartHouseApp();
smartHouseApp.addCommand("btn-1", bedroomLightPowerCommand);
smartHouseApp.addCommand("btn-2", bathroomlightPowerCommand);
smartHouseApp.addCommand("btn-3", bedroomIntensityCommand);

smartHouseApp.executeCommand("btn-1");
smartHouseApp.undoCommand("btn-1");

smartHouseApp.executeCommand("btn-2");
smartHouseApp.undoCommand("btn-2");

for (let i = 0; i < 5; i++) {
	smartHouseApp.executeCommand("btn-3");
}

for (let i = 0; i < 5; i++) {
	smartHouseApp.undoCommand("btn-3");
}
