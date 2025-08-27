// ? Single Responsibility Principle - SRP
import { ShoppingCart } from "./entities/shopping-cart.ts";
import { Order } from "./entities/order.ts";
import { Messaging } from "./services/messaging.ts";
import { Persistency } from "./services/persistency.ts";
import { Product } from "./entities/product.ts";

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();

const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product("Shirt", 49.9));
shoppingCart.addItem(new Product("Notebook", 9.9));
shoppingCart.addItem(new Product("Pencil", 1.59));

console.log(shoppingCart.items);
console.log(order.orderStatus);
console.log(shoppingCart.total());
order.checkout();

console.log(order.orderStatus);
