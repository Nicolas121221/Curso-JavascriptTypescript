function showMessage(msg: string): string {
	return msg;
}

// somente em ultimo caso
function showMessageAny(msg: any) {
	return msg;
}

console.log(showMessage("msg"));
console.log(showMessageAny("any msg"));
