import type { ProductProtocol } from "./product-protocol.ts";

export class ProductCustomizationDecorator implements ProductProtocol {
    constructor(protected product: ProductProtocol) {}

    getName(): string {
        return this.product.getName() + "(Custom)";
    }

    getPrice(): number {
        return this.product.getPrice() + 50;
    }
}
