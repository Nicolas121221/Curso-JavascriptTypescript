import { ShoppingOrder } from "./shopping-order/shopping-order.ts";

const order = new ShoppingOrder();
order.approvePayment();
order.shipOrder();
order.waitPayment();
order.shipOrder();
order.rejectPayment();
order.approvePayment();
order.waitPayment();
order.approvePayment();
order.shipOrder();
