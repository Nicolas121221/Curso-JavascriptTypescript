import type {
	SystemUserAddressProtocol,
	SystemUserProtocol,
} from "./system-user-protocol.ts";

export class AdminUser implements SystemUserProtocol {
	public firstName: string;
	public userName: string;
	constructor(firstName: string, userName: string) {
		this.firstName = firstName;
		this.userName = userName;
	}

	async getAddressess(): Promise<SystemUserAddressProtocol[]> {
		return new Promise((resolve) => {
			return setTimeout(() => {
				return resolve([
					{ street: "Av. Brasil", number: 50 },
					{ street: "Street A.", number: 40 },
				]);
			}, 2000);
		});
	}
}
