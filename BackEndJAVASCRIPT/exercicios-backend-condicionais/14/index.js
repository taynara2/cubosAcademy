//quantidade de água ingerida em litro.
const quantidadeDeAguaIngerida = 3;

//Lógica para cada quantidade de água
let alto = (quantidadeDeAguaIngerida < 1.5);
let moderado = (quantidadeDeAguaIngerida >= 1.5 && quantidadeDeAguaIngerida <= 3);
let baixo = (quantidadeDeAguaIngerida > 3);

//Condicional para cada quantidade de água
if (alto) {
    console.log("Risco Alto - Você está ingerindo pouquissima água, beba mais água!");
} else if (moderado) {
    console.log("Risco Mderado - Você está ingerindo pouca água, beba mais água!");
} else {
    console.log("Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns!!");
}