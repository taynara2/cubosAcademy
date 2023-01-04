const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]


// Testando brain storm -  com ajuda da explicação de codigo do Neto

function achandoIrresponavel(pet) {

    let dono = "";
    let find = false;

    for (let i = 0; i < usuarios.length; i++) {
        const { pets } = usuarios[i];

        //! colocando um if para caso eu ache de primeira o programa pare de checar.
        if (find) {
            break;
        } else {
            for (let j = 0; j < pets.length; j++) {
                if (pets[j] === pet) {
                    dono = usuarios[i].nome;
                    find = true;
                }
            }
        }


    }

    if (find) {
        return `O dono(a) do(a) ${pet} é o(a) ${dono}.`;
    } else {
        return `Que pena ${pet}, não encontramos sua pessoa.`;
    }

}

console.log(achandoIrresponavel("Salsicha"));


//* Meu primeiro code
// let whoToFind = "Farofa";
// for (let i = 0; i < usuarios.length; i++) {
//     const { pets } = usuarios[i];
//     for (let j = 0; j < pets.length; j++) {

//         if (pets[j] === whoToFind) {
//             return console.log(`O dono(a) do(a) ${whoToFind} é o(a) ${usuarios.nome}.`);
//         } else {
//             return console.log(`Que pena ${whoToFind}, não encontramos sua pessoa.`);
//         }
//     }
// }








