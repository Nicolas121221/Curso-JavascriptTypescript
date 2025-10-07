import { DefaultDiscount } from "./shopping-cart/default-discount.ts";
import { ECommerceShoppingCart } from "./shopping-cart/ecommerce-shopping-cart.ts";
import { NewDiscount } from "./shopping-cart/new-discount.ts";

const shoppingCart = new ECommerceShoppingCart();
shoppingCart.discount = new NewDiscount();
shoppingCart.discount = new DefaultDiscount();

shoppingCart.addProduct({ name: "Product 1", price: 50 });
shoppingCart.addProduct({ name: "Product 2", price: 50 });
shoppingCart.addProduct({ name: "Product 3", price: 50 });

console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());
