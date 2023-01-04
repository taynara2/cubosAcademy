/*
    Aula 01
    Identificador = 01
    Nome da aula = Introdução a programação

    Aula 02
    Identificador = 02
    Nome da aula = Variáveis

    Aula 03
    Identificador = 03
    Nome da aula = Condicionais

    Aula 04
    Identificador = 04
    Nome da aula = Arrays
 */



const aulas = [
    {
        identificador: 1,
        nomeDeAula: "Introdução a programação",
    },
    {
        identificador: 2,
        nomeDeAula: "Variáveis",
    },
    {
        identificador: 3,
        nomeDeAula: "Condicionais",
    },
    {
        identificador: 4,
        nomeDeAula: "Arrays",
    },
]
const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas,
}

console.log(curso);