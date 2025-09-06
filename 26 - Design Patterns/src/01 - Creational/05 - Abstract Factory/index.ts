import { EnterpriseVehicleCustomerFactory } from "./factories/enterprise-customer-vehicle-factory.ts";
import { IndividualVehicleCustomerFactory } from "./factories/individual-customer-vehicle-factory.ts";

const enterpriseFactory = new EnterpriseVehicleCustomerFactory();
const individualFactory = new IndividualVehicleCustomerFactory();

const car1 = enterpriseFactory.createVehicle("fusca", "João")
const car2 = individualFactory.createVehicle("celta", "Helena")

car1.pickUp()
car2.pickUp()
