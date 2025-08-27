// Interface segregation principle - ISP
import { ShoppingCart } from "./classes/shopping-cart.ts";
import { Order } from "./classes/order.ts";
import { Messaging } from "./services/messaging.ts";
import { Persistency } from "./services/persistency.ts";
import { Product } from "./classes/product.ts";
import { NoDiscount } from "./classes/discount.ts";
import {  IndividualCustomer } from "./classes/customer.ts";

// const tenPercentDiscount = new TenPercentDiscount();
// const fiftyPercentDiscount = new FiftyPercentDiscount();
const noDiscount = new NoDiscount();

const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer('Nícolas', 'Guedes', '111111111-11')
// const enterpriseCustomer = new EnterpriseCustomer('Microsoft', '222')

const order = new Order(shoppingCart, messaging, persistency, individualCustomer);

shoppingCart.addItem(new Product("Shirt", 49.9));
shoppingCart.addItem(new Product("Notebook", 9.9));
shoppingCart.addItem(new Product("Pencil", 1.59));

console.log(shoppingCart.items);
console.log(order.orderStatus);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkout();

console.log(order.orderStatus);
