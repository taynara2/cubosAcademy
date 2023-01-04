const numeros = [3, 0, 1, 8, 11, 7, 15];

let oMaior = numeros[0];
let oMenor = numeros[0];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > oMaior) {
        oMaior = numeros[i];
    } else if (numeros[i] < oMenor) {
        oMenor = numeros[i];
    }
}

console.log(oMaior - oMenor);