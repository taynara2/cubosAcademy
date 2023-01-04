const numeros = [3, 0, 1, 8, 11, 7, 15];

let oMaior = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > oMaior) {
        oMaior = numeros[i];
    }
}
console.log(oMaior);