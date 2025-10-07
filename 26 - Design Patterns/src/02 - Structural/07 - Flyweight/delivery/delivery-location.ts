import type { DeliveryFlyweight } from "./delivery-flyweight.ts";
import type { DeliveryLocationData } from "./delivery-types.ts";

export class DeliveryLocation implements DeliveryFlyweight {
    constructor(private readonly intrinsicState:DeliveryLocationData){}

    deliver(name: string, number: string): void {
        console.log("\nDelivery to %s", name);
        console.log("At: ", this.intrinsicState.street, this.intrinsicState.city)
        console.log("Number: ", number)
    }
}
