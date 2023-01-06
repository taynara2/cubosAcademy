const carta = "Q";

function solucao(carta) {
    //que diacho de truco eh esse amigo
    const tabela = ["Q", "J", "K", "A", "2", "3"];
    let manilha = "";


    for (let i = 0; i < tabela.length; i++) {
        if (tabela[i] === carta) {
            if (carta === "3") {
                manilha = "Q"
            } else {
                manilha = tabela[i + 1]
            }
        }
    }
    console.log(manilha)

}

solucao(carta)