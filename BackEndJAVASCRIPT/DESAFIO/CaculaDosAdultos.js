const teste = [12, 18, 27];

function solucao(lista) {

    const maiores = lista.filter((idade) => idade >= 18);


    if (maiores.length > 0) {

        const habilitados = maiores.reduce((menor, atual) => {
            return menor < atual ? menor : atual;
        })
        return console.log(habilitados);
    } else {
        return console.log("CRESCA E APARECA");
    }

}

solucao(teste)