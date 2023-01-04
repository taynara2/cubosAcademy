let teste = [2, 3, 4];

function solucao(lista) {

    const total = lista.reduce((total, atual) => total + atual);
    media = total / lista.length;
    console.log(media)

}
solucao(teste);