/*

**C:** comprimento do círculo \
**A:** área do círculo \
**R:** raio do círculo

 C = 2piR

 A = piR^2

 
 Sendo R = 1.
*/

//comprimento do raio
let raio = 1;

// comprimento da circuferência do círculo
let compCirc = 2 * Math.PI * raio;
console.log(`O comprimento da circuferência do círculo é de ${compCirc.toFixed(2)}`);

// comprimento da area da círculo
let area = Math.PI * Math.pow(raio, 2);
console.log(`O comprimento da área do círculo é de ${area.toFixed(2)}`);