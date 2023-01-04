const numeros = [1, 98, -100, 0, 12, 19, 5, 60, 44];

const oMaior = numeros.reduce((maior, atual) => {
    return maior > atual ? maior : atual;
})
console.log(oMaior)