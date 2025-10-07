import type { DeliveryFlyweight } from "./delivery-flyweight.ts";
import { DeliveryLocation } from "./delivery-location.ts";
import type {
	DeliveryLocationData,
	DeliveryLocationDictionary,
} from "./delivery-types.ts";

export class DeliveryFactory {
	private locations: DeliveryLocationDictionary = {};

	private createId(data: DeliveryLocationData): string {
		return Object.values(data)
			.map((item) => item.replace(/\s+/, ""))
			.join("_")
			.toLowerCase();
	}

	makeLocation(intrinsicState: DeliveryLocationData): DeliveryFlyweight {
		const key = this.createId(intrinsicState);
		if(this.locations[key]) return this.locations[key];
		this.locations[key] = new DeliveryLocation(intrinsicState);
		return this.locations[key];
	}

    getLocations(): DeliveryLocationDictionary{
        return this.locations
    }
}
