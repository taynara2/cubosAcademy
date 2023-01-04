teste = [10, 5, 20]

function solucao(numero, limiteInferior, limiteSuperior) {

    let validacao = (Number.isInteger(numero)) && numero >= limiteInferior && numero <= limiteSuperior ? true : false;

    if (validacao) {
        return console.log("PERTENCE");
    } else {
        return console.log("NAO PERTENCE");
    }
}

solucao(teste)
