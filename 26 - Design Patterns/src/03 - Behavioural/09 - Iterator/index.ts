import { MyDataStructure } from "./classes/my-data-structure.ts";
import { MyReverseIterator } from "./classes/my-reverse-iterator.ts";

const dataStructure = new MyDataStructure();
dataStructure.addItem("a", "b", "c", "d", "e", "f");
console.log(dataStructure);

const [a, b] = dataStructure;
console.log("stolen: ", a, b)

dataStructure.resetIterator()
for (const data of dataStructure){
    console.log(data)
}

dataStructure.changeIterator(new MyReverseIterator(dataStructure))

console.log()
for (const data of dataStructure) {
	console.log(data);
}
