const teste = 'aGORA'

function solucao(input) {
    //Enter your code here
    let newPalavra = "";
    const palavras = input;

    let letras = palavras.slice(0, 1);
    let letrasResto = palavras.slice(1);
    let validacao = ((letras === letras.toLowerCase()) && (letrasResto === letrasResto.toUpperCase()) ? true : false);

    if (validacao) {
        newPalavra = letras.toUpperCase() + letrasResto.toLowerCase();
    } else if (input === input.toUpperCase()) {
        newPalavra = input.toLowerCase();
    } else {
        newPalavra = input;
    }


    return console.log(newPalavra)
}

solucao(teste)