// ? unknown - pai de todos os tipos (any mais seguro)

let x: unknown;
x = 100;
x = "Nícolas";
x = 900;
x = "10";
const y = 800;
if (typeof x === "number") console.log(x + y);
