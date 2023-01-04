//valor do produto comprado.
// ? esse valor tbm deve estar em centavos...
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;


let valorParcela = (valorDoProduto / 100) / quantidadeDoParcelamento; //Para obter o valor de cada parcela.
let parcelasRestantes = (valorDoProduto / 100 - valorPago) / valorParcela; // Para obter a quantidade de parcelas restantes.

// Retorno.
console.log(`Olá, restam ${parcelasRestantes} de R$${valorParcela} para quitar sua dívida.`);
