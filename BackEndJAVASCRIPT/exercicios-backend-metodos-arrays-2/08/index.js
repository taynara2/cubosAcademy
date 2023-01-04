const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]


const refatorandoFrutas = frutas.map((fruta) => {
    let nome = "";
    // transforma em string e abaixa todas as letras
    nome = fruta.toString().toLowerCase();
    // recorta somente a primeira letra e  da capslock
    let primeiraLetra = nome.slice(0, 1);
    // guarda os caracteres a partir do index 1, ou seja, o resto da palavra.
    let restanteNome = nome.slice(1);
    // concatena tudo para deixar no padrão.
    nome = frutas.indexOf(fruta) + " - " + primeiraLetra.toUpperCase() + restanteNome;
    return nome
});

console.log(refatorandoFrutas)