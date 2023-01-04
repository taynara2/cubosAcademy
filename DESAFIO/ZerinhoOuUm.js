const teste = [
    {
        "nome": "Herman",
        "jogada": 1
    },
    {
        "nome": "Rhodes",
        "jogada": 0
    },
    {
        "nome": "Beach",
        "jogada": 0
    },
    {
        "nome": "Laurel",
        "jogada": 0
    },
    {
        "nome": "Beatrice",
        "jogada": 0
    },
    {
        "nome": "Alison",
        "jogada": 0
    },
    {
        "nome": "Saundra",
        "jogada": 0
    },
    {
        "nome": "Klein",
        "jogada": 0
    }
]

function solucao(jogadores) {

    const jogadorUm = jogadores.filter((jogador) => {
        return jogador.jogada === 1
    })
    const jogadorZero = jogadores.filter((jogador) => {
        return jogador.jogada === 0
    })
    if (jogadorUm.length === 1) {
        return console.log(jogadorUm[0].nome)
    } else if (jogadorZero.length === 1) {
        return console.log(jogadorZero[0].nome)
    } else {
        return console.log('NINGUEM')
    }

}
solucao(teste)