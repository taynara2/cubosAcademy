const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

/*
for (let i = 0; i < original.length; i++) {
    if (original[i] % 2 == 0) {
        pares.push(original[i]);
    } else {
        impares.push(original[i]);
    }
}
console.log(pares);
console.log(impares);
*/
// Inabalável! kkkkkk

// Voltando pra provar que nem tudo é chocolate na vida.... Não tinha ouvido o plus da questão.

//for Of

/*
for (let itens of original) {

    if (itens % 2 == 0) {
        pares.push(itens);
    } else {
        impares.push(itens);
    }

}
console.log(pares);
console.log(impares);
*/
//while

let i = 0;
while (i < original.length) {
    if (original[i] % 2 == 0) {
        pares.push(original[i]);
    } else {
        impares.push(original[i]);
    }
    i++;
}
console.log(pares);
console.log(impares);


// Inabalável kkkkkkk