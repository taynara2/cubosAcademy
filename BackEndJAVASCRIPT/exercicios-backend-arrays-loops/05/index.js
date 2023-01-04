// Se o resto de um dividendo por 2 não for 0, o número não é par.

const original = [1, 4, 12, 21, 53, 88, 112];

let pares = [];

for (let i = 0; i < original.length; i++) {
    if (original[i] % 2 == 0) {
        pares.push(original[i]);
    }
}
console.log(pares);