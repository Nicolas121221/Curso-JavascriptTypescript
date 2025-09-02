import type { User } from "../interfaces/user.ts";

export class MyDatabaseClassic {
	private static instance: MyDatabaseClassic | null = null;
	private users: User[] = [];

	private constructor() {}

	static getInstance(): MyDatabaseClassic {
		if (MyDatabaseClassic.instance === null) {
			MyDatabaseClassic.instance = new MyDatabaseClassic();
		}

		return MyDatabaseClassic.instance as MyDatabaseClassic;
	}

	add(user: User): void {
		this.users.push(user);
	}

	remove(index: number) {
		this.users.splice(index, 1);
	}

	show(): void {
		for (const user of this.users) {
			console.log(user);
		}
	}
}
const db1 = MyDatabaseClassic.getInstance();
const db2 = MyDatabaseClassic.getInstance();

console.log(db1 === db2);
