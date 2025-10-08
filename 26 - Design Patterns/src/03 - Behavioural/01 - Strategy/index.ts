import { DefaultDiscount } from "./shopping-cart/default-discount";
import { ECommerceShoppingCart } from "./shopping-cart/ecommerce-shopping-cart";
import { NewDiscount } from "./shopping-cart/new-discount";

const shoppingCart = new ECommerceShoppingCart();
shoppingCart.discount = new NewDiscount();
shoppingCart.discount = new DefaultDiscount();

shoppingCart.addProduct({ name: "Product 1", price: 50 });
shoppingCart.addProduct({ name: "Product 2", price: 50 });
shoppingCart.addProduct({ name: "Product 3", price: 50 });

console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());
