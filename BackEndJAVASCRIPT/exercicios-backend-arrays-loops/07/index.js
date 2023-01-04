const nomes = ["Ana", "Joana", "Carlos", "amanda"];

let ComecaA = [];

for (let i = 0; i < nomes.length; i++) {
    if (nomes[i][0] === 'A' || nomes[i][0] === 'a') {
        ComecaA.push(nomes[i]);
    }
}

console.log(ComecaA);

