const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
];


const procuraLetra = nomes.filter((nome) => {
    if (nome.startsWith("a") || nome.startsWith("A")) {
        return nome;
    }
});

console.log(procuraLetra)
