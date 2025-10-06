import { SystemUserProxy } from "./system-user/system-user-proxy.ts";

async function clientCode(): Promise<void> {
	const user = new SystemUserProxy("Nícolas", "nicolas121221");
	console.log("this will take about 2 seconds");
	console.log(await user.getAddressess());
	console.log("this will repeat (cache) \n");

	for (let i = 0; i < 5; i++) {
		console.log(await user.getAddressess());
	}
}

clientCode();
