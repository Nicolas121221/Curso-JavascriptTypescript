import { deliveryContext } from "./delivery/delivery-context.ts";
import { DeliveryFactory } from "./delivery/delivery-factory.ts";

const factory = new DeliveryFactory();
deliveryContext(factory, "Nícolas", "20A", "Av. Brasil", "SP")
deliveryContext(factory, "Helena", "20A", "Av. Brasil", "SP")
deliveryContext(factory, "Eliana", "2", "A", "BH")
deliveryContext(factory, "João", "502", "Av. Brasil", "SP")
deliveryContext(factory, "Joana", "501", "B", "RJ")

console.log(factory.getLocations())
