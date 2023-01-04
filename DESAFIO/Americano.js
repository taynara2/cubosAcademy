const teste = [12, 18, 27];

function solucao(numeros) {

    let jogadores = numeros.length;
    let total = numeros.reduce((a, b) => a + b);
    let resto = 0;

    if (total % jogadores === 0) {
        resto = jogadores;
    } else {
        resto = (total % jogadores);
    }

    return console.log(resto);
}

solucao(teste)