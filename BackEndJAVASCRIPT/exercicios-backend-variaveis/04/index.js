/*

M: montante (o capital acrescido dos juros, ou seja, Capital + Juros)
C: capital (valor inicial de uma dívida, empréstimo ou investimento)
i: taxa fixa de juros (expressa em decimal na fórmula, ou seja, o valor da taxa dividido por 100)
t: período de tempo


Sendo:

C = 1000
i = 0,125
t = 5

! M = C (1+t)^i 

*/


//Valor inicial de divida.
let capital = 1000;
//Taxa de juros
let taxaJuros = 0.125;
//Periodo de tempo
let periodo = 5;
// Formulá para calcular o montante.
let montante = capital * ((1 + taxaJuros) ** periodo);

console.log(`O montante de sua dívida é de: R$${montante.toFixed(2)}.`);


//! corrigido.