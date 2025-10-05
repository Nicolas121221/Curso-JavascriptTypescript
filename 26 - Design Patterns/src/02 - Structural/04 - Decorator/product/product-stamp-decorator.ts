import { ProductDecorator } from "./product-decorator.ts";

export class ProductStampDecorator extends ProductDecorator {
	getName(): string {
		return this.product.getName() + "(Stamped)";
	}

	getPrice(): number {
		return this.product.getPrice() + 10;
	}
}
