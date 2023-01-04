/*
onde:

v: volume da esfera
d: diâmetro da esfera
raio = 3
d= 6
v= (4/3)*pi*r^3

*/

//? Diametro
let diametro = 6;
// raio da esfera
let raio = diametro / 2;
// volume da esfera sem o pi π
let volume = (4 / 3) * Math.pow(raio, 3);

console.log(`O volume de sua esfera é de ${volume}πcm³, ou ${(volume * Math.PI).toFixed(2)}cm³.`);
