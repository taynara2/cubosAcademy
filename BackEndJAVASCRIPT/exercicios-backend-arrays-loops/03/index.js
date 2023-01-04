const numeros = [54, 22, 14, 87, 284, 10];

let posicao = null;
let achou = false;

// loop
for (let i of numeros) {
    posicao++;
    if (i === 10) {
        achou = true;
        break;
    }
}
//zerar incremento de posição caso ela não tenha sido achada
if (!achou) {
    posicao = 0;
}

console.log(posicao - 1)

/*
! Esse código abaixo não me pertence. Pertence ao aluno Antonio Victor#8607. Possuo ele pois fiquei encucada com o meu código acima e ele me ajudou me mostrando como se faz de forma mais simples. Mas ambos funcionam.

const numeros = [54, 22, 14, 87, 284];
let posicao = -1;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 10) {
        posicao = i;
        break;
    }
}

console.log(posicao);

*/