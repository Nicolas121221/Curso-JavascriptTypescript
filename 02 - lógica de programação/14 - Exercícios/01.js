// Escreva uma função que recebe 2 números e retorne o maior deles

function max(x, y) {
    if (x > y) return x;
    if (y > x) return y;
    return x > y ? x : y;
}

max2 = (x,y) => x > y ? x: y

console.log(max(0, 0))