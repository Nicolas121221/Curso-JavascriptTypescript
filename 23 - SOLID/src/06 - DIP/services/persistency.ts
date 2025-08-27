import { PersistencyProtocol } from "../classes/interfaces/Persistency-protocol";

export class Persistency implements PersistencyProtocol{
	saveOrder(): void {
		console.log("Your order was saved");
	}
}
