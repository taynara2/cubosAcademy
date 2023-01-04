/*
Po = a população incial de pessoas infectadas
X = quantidade de pessoas para as quais um paciente infectado pode transmitir
t = tempo percorrido

Ou seja, se:

Po = 1000
x = 4
t = 100

Formula:

! Pf = Po *x ^(t/7)


*/
//Numero de pessoas infectadas inicialmente
let infecInicial = 1000;
//Numero de pessoas que a mesma pode infectar
let transmicao = 4;
// tempo decorrido
let tempo = 7;
// formula para infectados final
let infecFinal = infecInicial * Math.pow(transmicao, tempo / 7);

console.log(`O numero total de pessoas infectadas será de ${infecFinal}.`);