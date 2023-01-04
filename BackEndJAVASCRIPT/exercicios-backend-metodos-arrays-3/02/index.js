const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

//* A maior string com reduce()

const oMaiorNome = cidades.reduce((maior, atual) => {
    if (atual.length > maior.length) {
        return atual;
    } else {
        return maior;
    }
});

console.log(oMaiorNome);