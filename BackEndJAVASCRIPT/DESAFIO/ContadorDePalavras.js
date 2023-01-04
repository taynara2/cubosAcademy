const teste = ' '

function solucao(texto) {

    const palavras = texto.trim().split(/\ +/g).filter(palavra => palavra != "");

    console.log(palavras.length)
    console.log(palavras)
}

solucao(teste)