const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;

let grupo1 = [];
let grupo2 = [];

// Separação de grupos.
for (let i = 0; i < nomes.length; i++) {
    if (grupo1.length <= 3) {
        grupo1.push(nomes[i]);
    } else {
        grupo2.push(nomes[i]);
    }
}

// Formatação de texto
let grupoString1 = grupo1.toString();
grupoString1 = grupoString1.replace(/\,/g, ', ');
let grupoString2 = grupo2.toString();
grupoString2 = grupoString2.replace(/\,/g, ', ');

// print
console.log(`Grupo 1: ${grupoString1}.
Grupo 2: ${grupoString2}.`);