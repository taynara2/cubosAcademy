const usuarios = [
    {
        nome: "João",
        pets: [],
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

for (let i = 0; i < usuarios.length; i++) {
    let tamanho = usuarios[i].pets.length;

    let textoPet = tamanho === 0 ? "não tenho pet." : tamanho > 1 ? `tenho ${tamanho} pets.` : `tenho ${tamanho} pet.`;


    /*
    ! parte  a seguir foi substituida pelo ternário acima...
        if (usuarios[i].pets.length === 0) {
            textoPet = "não tenho pet.";
        } else if (usuarios[i].pets.length > 1) {
            textoPet = `tenho ${usuarios[i].pets.length} pets.`;
        } else {
            textoPet = ;
        }
    
        */
    console.log(`Sou ${usuarios[i].nome} e ${textoPet}`)

}
