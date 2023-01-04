const numeros = [7, 122, 4, 6, 8, 44];

const numeroPar = numeros.every((item) => {
    return item % 2 === 0;
});

if (numeroPar) {
    console.log('Todos os números são pares');
} else {
    console.log('Array Invalidado.');
}
