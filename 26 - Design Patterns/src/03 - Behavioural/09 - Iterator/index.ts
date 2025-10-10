import { MyDataStructure } from "./my-data-structure.ts";
import { MyReverseIterator } from "./my-reverse-iterator.ts";

const dataStructure = new MyDataStructure();
dataStructure.addItem("a", "b", "c", "d", "e", "f");
console.log(dataStructure);

const [a, b] = dataStructure;
console.log("stolen: ", a, b)


for (const data of dataStructure){
    console.log(data)
}

dataStructure.changeIterator(new MyReverseIterator(dataStructure))

for (const data of dataStructure) {
	console.log(data);
}
