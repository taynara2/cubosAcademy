const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];


//* Não entendo de como o cesto altera a função frutas também.
// let cesto = frutas;
// cesto = cesto.reverse();
// cesto = cesto.toString();
// cesto = cesto.replace(/\,/g, ", ")

// console.log(cesto);

let novoCesto = frutas;
novoCesto.shift();
novoCesto.pop();
novoCesto.push("Melão");

console.log(novoCesto);