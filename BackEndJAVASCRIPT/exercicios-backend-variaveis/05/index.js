/*
x1	x2	y1	y2
1	1	1	4

d

*/

let x1 = 1, x2 = 1, y1 = 1, y2 = 4;

// Equação matemática para se calcular a diferença entre dois pontos.
//! Quando uma expressão matemárica for feita pelo operador Math., todos os outros fatores especiais devem ser feito por Math tbm. Ex: '^' tem que ser substituido por Math.pow(expressão, potencia.).



let distancia = Math.sqrt((Math.pow(x2 - x1, 2)) + (Math.pow(y2 - y1, 2)));


console.log(`A distancia entre os pontos é de ${distancia}km.`);