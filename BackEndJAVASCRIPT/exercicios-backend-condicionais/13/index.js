//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "cristal";

//valor da mercadoria (centavos)
// ! Pra que diabos colocar essa jossa em centavos????????  (；￣Д￣)
const valorDoProduto = 13000;

// Calculo para cada tipo de pagamento.
let valorAvista = (valorDoProduto - (valorDoProduto * 0.10)) / 100;
let valorCredito = (valorDoProduto - (valorDoProduto * 0.05)) / 100;
let valorCheque = (valorDoProduto - (valorDoProduto * 0.03)) / 100;

//Validação das categorias
if (tipoDePagamento === "credito") {
    console.log(`O valor a ser pago é de R$${valorCredito.toFixed(2)}`)
} else if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
    console.log(`O valor a ser pago é de R$${valorAvista.toFixed(2)}`)
} else if (tipoDePagamento === "cheque)") {
    console.log(`O valor a ser pago é de R$${valorCheque.toFixed(2)}`)
} else {
    console.log("O método de pagamento não é valido");
}

 //! desculpa.