import { MyDatabaseClassic } from "./db/my-database-classic.ts";
import { myDatabaseClassic as myDatabaseClassicFromModule } from "./module_a.ts";

const myDatabaseClassic = MyDatabaseClassic.getInstance();
myDatabaseClassic.add({ name: "Nícolas", age: 18 });
myDatabaseClassic.add({ name: "Maria", age: 25 });
myDatabaseClassic.add({ name: "Eduardo", age: 24 });
myDatabaseClassic.show();

console.log('is equal: ', myDatabaseClassic === myDatabaseClassicFromModule)
