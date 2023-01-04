const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],

    imprimirResumo: function (carrinho) {
        let quantidade = 0;
        let precoTotal = 0;

        for (i = 0; i < produtos.length; i++) {
            quantidade += produtos[i].qtd;
            precoTotal += (produtos[i].qtd * produtos[i].precoUnit) / 100;
        }
        console.log(`
        Cliente ${nomeDoCliente},
        Total de itens a pagar: ${quantidade},
        Total a pagar: R$${precoTotal.toFixed(2)}.
        `)
    }
}

const { imprimirResumo, produtos, nomeDoCliente } = carrinho;
imprimirResumo();

// ? function resumoDoCarrinho(carrinho) {
//     let quantidade = 0;
//     let precoTotal = 0;

//     for (i = 0; i < produtos.length; i++) {
//         quantidade += produtos[i].qtd;
//         precoTotal += (produtos[i].qtd * produtos[i].precoUnit) / 100;
//     }
//     console.log(`
//     Cliente ${nomeDoCliente},
//     Total de itens a pagar: ${quantidade},
//     Total a pagar: R$${precoTotal.toFixed(2)}.
//     `)
// }
// resumoDoCarrinho();

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 1,
    precoUnit: 5000,
};

const novaCamisa = {
    id: 2,
    nome: "Camisa",
    qtd: 1,
    precoUnit: 5000,
};

function addProdutoCarrinho(carrinho, produtos) {

}


