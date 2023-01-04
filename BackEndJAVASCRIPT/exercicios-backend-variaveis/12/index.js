/* 
Calculadora de taxa de juros

i: taxa de juros
M: montante
C: capital inicial (valor de dinheiro inicial)
n: número de meses

! i = ([m/c)^(1/n)]-1

M: 90000
C: 60000
n: 24

resultado final a ser impresso em string
"O seu financiamento de 60000 reais teve uma taxa de juros de 1,703%, pois após 24 meses você teve que pagar 90000 reais."
*/

let montante = 90000;
let capInicial = 60000;
let tempo = 24;

let taxaJuros = Math.pow((montante / capInicial), (1 / tempo)) - 1;
taxaJuros *= 100;

console.log(`O seu financiamento de ${capInicial} reais teve uma taxa de juros de ${taxaJuros.toFixed(3)}%, pois após ${tempo} meses você teve que pagar ${montante} reais.`);




