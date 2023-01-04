const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]

// * Menor para o maior
const numerosOrdenados = numeros.sort((a, b) => a - b);
console.log(numerosOrdenados);

//* Maior para o menos
const numerosOrdenados2 = numeros.sort((a, b) => b - a);
console.log(numerosOrdenados2);

//* Ordenação Unicode
const numerosOrdenados3 = numeros.sort();
console.log(numerosOrdenados3)

//! antes de tentar se dá pra colocar a função no retorno simples sem as {}
// const cestoFrutas = frutas.sort((a, b) => {
//     return a.localeCompare(b);
// })

//* em ordem alfabética crescente
const cestoFrutas = frutas.sort((a, b) => a.localeCompare(b));
console.log(cestoFrutas);

//* em ordem alfabética decrescente
const cestoFrutas2 = frutas.sort((a, b) => b.localeCompare(a));
console.log(cestoFrutas2);

//* ordenado por ordem de caracteres
const cestoExigente = frutas.sort((a, b) => {
    if (a.length > b.length) {
        return 1;
    } else {
        return -1;
    }
    return 0;
});
console.log(cestoExigente);