let teste = [1, 2, 3, 4];

function solucao(lista) {
    const somaTudo = lista.reduce((maior, atual) => maior + atual);
    console.log(somaTudo);
}

solucao(teste);