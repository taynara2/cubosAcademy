/* 

At: área total do cilindro
R: raio da base
H: altura do cilindro

Faça um programa que calcula a área total de um cilindro a partir do raio da sua base e da sua altura.

Exemplo:

Para um cilindro com:

R = 3
H = 1

! at = 2piR(R+H);
*/

let raio = 3, altura = 1;
// formula sem o pi π
let areaCilindro = 2 * raio * (raio + altura);
// área com o π pi
let areaCilindroPI = areaCilindro * Math.PI;
console.log(`A área do Cilindro: ${areaCilindro}πcm², ou ${areaCilindroPI.toFixed(2)}cm².`);
