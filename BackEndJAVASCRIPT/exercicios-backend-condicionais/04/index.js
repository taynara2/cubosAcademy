const ladoA = 0;
const ladoB = 0;

//seu código aqui

const nomes = ['Branco', 'Ás', 'Duque', 'Terno', 'Quadra', 'Quina', 'Sena'];
let bucha = (ladoA === ladoB) ? true : false;

if (bucha) {
    console.log(`Sua bucha é: ${nomes[ladoA]}.`);
} else {
    console.log('Sua peça não é uma bucha.');
}


