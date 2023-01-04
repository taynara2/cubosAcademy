const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];

const posicao = 3;
let seletos = [];


seletos = nomes.slice(posicao, posicao + 3);
seletos = seletos.join(' - ');
console.log(seletos);
