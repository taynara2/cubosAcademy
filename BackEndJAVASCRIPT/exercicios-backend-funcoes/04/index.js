const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],

    depositar: function (valor) {
        if (valor > 0) {
            this.saldo += valor;
            this.historicos.push(
                {
                    tipo: "Depósito",
                    valor: valor,
                }
            );
            console.log(`Depósito de R$${(valor / 100).toFixed(2)} realizado para o cliente: ${this.nome}`);
        }
    },
    sacar: function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            this.historicos.push(
                {
                    tipo: "Saque",
                    valor: valor,
                }
            );
            console.log(`Saque de R$${(valor / 100).toFixed(2)} realizado para o cliente: ${this.nome}`);
        } else {
            console.log(`Saldo insufuciente para o saque de: ${this.nome}`);
        }
    },
    extrato: function () {
        for (item of this.historicos) {
            console.log(`${item.tipo}: R$${(item.valor / 100).toFixed(2)}`);
        }

    },
}

contaBancaria.depositar(10000);
contaBancaria.sacar(500000);
contaBancaria.sacar(5000);
contaBancaria.extrato();