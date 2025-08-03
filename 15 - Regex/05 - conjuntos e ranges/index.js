const {alfabeto} = require('../base')

// [abc]        -> conjunto 
// [^]          -> negação
// [min-max]    -> range

console.log(alfabeto)
console.log(alfabeto.match(/[^abc]/g))
console.log(alfabeto.match(/[0-9]+/g))
console.log(alfabeto.match(/[a-z]+/g))
console.log(alfabeto.match(/[A-Z]+/g))
console.log(alfabeto.match(/[a-zA-Z0-9]+/g))
console.log(alfabeto.match(/[\W]+/g))
console.log(alfabeto.match(/[^a-zA-Z0-9]+/g))    // negação
console.log(alfabeto.match(/[\u00A0-\u00BA]+/g)) // unicode