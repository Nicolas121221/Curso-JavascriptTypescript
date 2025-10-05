import { ProductCustomizationDecorator } from "./product/product-customization-decorator.ts";
import { ProductStampDecorator } from "./product/product-stamp-decorator.ts";
import { TShirt } from "./product/t-shirt.ts";

const tShirt = new TShirt();
const tShirtWithStamp = new ProductStampDecorator(tShirt);
const tShirtStampFrontAndBack = new ProductStampDecorator(tShirtWithStamp);
const customizedTShirt = new ProductCustomizationDecorator(tShirt);

console.log(tShirt.getPrice(), tShirt.getName());
console.log(tShirtWithStamp.getPrice(), tShirtWithStamp.getName());
console.log(
	tShirtStampFrontAndBack.getPrice(),
	tShirtStampFrontAndBack.getName(),
);
console.log(customizedTShirt.getPrice(), customizedTShirt.getName());
