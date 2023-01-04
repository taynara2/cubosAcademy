const enderecos = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
];

// função primeiro, depois callback dentro da função dando referencia a entrada de dados da função. console.log fora do callback

function local(cep) {

    const achou = enderecos.find((endereco) => {
        return cep === endereco.cep;

    });
    return console.log(achou.rua);
}


local(00222444);
