import type { DeliveryLocation } from "./delivery-location.ts";

export interface DeliveryLocationData {
	readonly street: string;
	readonly city: string;
}

export type DeliveryLocationDictionary = { [r: string]: DeliveryLocation };
