let min = 2
let max = 10
let valores = [0, 5, 6, 10, 11]

function solucao(min, max, valores) {
    //seu codigo aqui
    const jogadoresHabilitados = valores.filter((dinheiro) => {
        return (dinheiro >= min && dinheiro <= max)
    })
    console.log(jogadoresHabilitados);

}

solucao(min, max, valores)