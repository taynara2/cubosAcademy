//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 100000000;

let parcela = (rendaMensalEmCentavos * (18 / 100)) / 100;


if (mesesDecorridos > 60) {
    console.log("Seu periodo de pagamento já foi encerrado");
} else if (totalJaPagoPeloAluno >= 1800000) {
    console.log("Sua dívida total já foi encerrada.");
} else if (rendaMensalEmCentavos >= 200000) {
    console.log(`A parcela deste mês é de R$${parcela}.`);
} else {
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.");
}