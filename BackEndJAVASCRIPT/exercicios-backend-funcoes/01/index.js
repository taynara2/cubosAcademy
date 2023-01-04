const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};


const { questoes } = prova;
const { aluno } = prova;

function corrigirProva(prova) {
    let acertos = 0;

    // for (let i = 0; i < prova.questoes.length; i++) {
    //     let acertou = prova.questoes[i].resposta === prova.questoes[i].correta ? true : false;
    //     if (acertou) {
    //         acertos++;
    //     }
    // }

    for (i of questoes) {
        let acertou = i.resposta === i.correta ? true : false;
        if (acertou) {
            acertos++;
        }
    }

    console.log(`o aluno(a) ${aluno} acertou ${acertos} questões e obteve nota ${acertos * 2}. `);
}

corrigirProva();
