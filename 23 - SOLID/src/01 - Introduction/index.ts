type CartItem = { name: string; price: number };
type OrderStatus = "open" | "closed"

export class ShoppingCartLegacy {
	private readonly _items: CartItem[] = [];
	private _orderStatus: OrderStatus  = "open";

	addItem(item: CartItem): void {
		this._items.push(item);
	}

	removeItem(index: number): void {
		this._items.splice(index, 1);
	}

	get items(): Readonly<CartItem[]> {
		return this._items;
	}

    get orderStatus(): OrderStatus{
        return this._orderStatus
    }

	total(): number {
		return +this._items
			.reduce((ac, value) => ac + value.price, 0)
			.toFixed(2);
	}

	checkout(): void {
		if (this.isEmpty()) {
			console.log("Your cart is empty");
			return;
		}

		this._orderStatus = "closed";
		this.sendMessage(
			`Your order has a total of ${this.total().toLocaleString("pt-BR", {
				style: "currency",
                currency: 'BRL'
			})} and it is being executed`,
		);
		this.saveOrder();
		this.clear();
	}

	sendMessage(msg: string): void {
		console.log("Message: ", msg);
	}

	clear(): void {
		this._items.length = 0;
		console.log("Your shopping cart was cleared");
	}

	saveOrder(): void {
		console.log("Your order was saved");
	}

	isEmpty(): boolean {
		return this._items.length === 0;
	}
}

const shoppingCart = new ShoppingCartLegacy();

shoppingCart.addItem({ name: "Shirt", price: 49.9 });
shoppingCart.addItem({ name: "Notebook", price: 9.9 });
shoppingCart.addItem({ name: "Pencil", price: 1.59 });


console.log(shoppingCart.items);
console.log(shoppingCart.orderStatus)
console.log(shoppingCart.total());
shoppingCart.checkout();

console.log(shoppingCart.orderStatus)
