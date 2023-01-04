const teste = [150, 50]

function solucao(precos) {
    //seu codigo aqui
    let valorTotal = precos.reduce((total, atual) => total + atual);
    let menorProduto = precos.reduce((menor, atual) => { return menor < atual ? menor : atual });
    if (precos.length >= 3) {
        return console.log(valorTotal - (menorProduto * 0.5));
    } else {
        return console.log(valorTotal)
    }

}

solucao(teste)