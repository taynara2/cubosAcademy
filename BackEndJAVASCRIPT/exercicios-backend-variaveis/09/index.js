/*
imprima na tela a soma dos seus ângulos internos, conforme a fórmula abaixo:

S: soma dos ângulos internos do polígono
n: número de lados do polígono

! S=(n-2)*180;

Em seguida, calcule quanto vale cada um desses ângulos, caso eles sejam todos iguais, utilizando a fórmula abaixo:
a: o valor de cada ângulo em graus

! a=S/n;

*/

// numero de laods
let numeroLados = 6;
// formula para a soma dos angulos internos
let somaAngulos = (numeroLados - 2) * 180;
console.log(`A soma de todos os angulos é de ${somaAngulos}°.`);

//valor de cada angulo
let angulo = somaAngulos / numeroLados;
console.log(`Cada angulo tem o valor de ${angulo}°`);
