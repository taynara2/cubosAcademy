const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const soAsTop = cidades.filter(cidade => cidade.length < 9)
let formatado = soAsTop.toString().replaceAll(",", ", ");

console.log(formatado);
