const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
const a3 = a1.concat(a2, [7, 8, 9], 'Nícolas')
// ... rest operator -> ... spread

const a4 = [...a1, ...a2, ...[7, 8, 9], 'Nícolas Guedes']
console.log(a3, a4);