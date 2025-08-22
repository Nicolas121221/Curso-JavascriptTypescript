type MyType = number;

const arrayNumbers: Array<number> = [1, 2, 3, 4, 5, 6];
console.log(arrayNumbers);

async function asyncPromise() {
	return 1;
}

function myPromise(): Promise<MyType> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(1);
		}, 1000);
	});
}

asyncPromise().then((result) => console.log(result));
myPromise().then((result) => console.log(result));
