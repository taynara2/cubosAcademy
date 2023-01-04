//! resolver uma equação do segundo grau de acordo com báskara.
// 5x^2 + 4x - 3 = 0;


// valores respectivos da equação de segundo grau
let a = 5;
let b = 4;
let c = -3;
// calculo do delta
let delta = Math.pow(b, 2) - 4 * a * c;

console.log(`O delta vale: ${delta}`);

let x1 = (-b - Math.sqrt(delta)) / (2 * a);
let x2 = (-b + Math.sqrt(delta)) / (2 * a);

console.log(`O x1 vale: ${x1.toFixed(2)} e O x2 vale: ${x2.toFixed(2)}.`);
