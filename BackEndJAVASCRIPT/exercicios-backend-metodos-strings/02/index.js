const cpf = "12345678900";
const cnpj = "11222333000199";

let novoCpf = cpf.replace(/[^\d]+/g, '');
let novoCnpj = cnpj.replace(/[^\d]+/g, '');
let validacaoCPF = (novoCpf.length === 11) ? true : false;
let validacaoCNPJ = (novoCnpj.length === 14) ? true : false;

if (validacaoCPF) {
    novoCpf = novoCpf.replace(/^([\d]{3})([\d]{3})([\d]{3})([\d]{2})$/, "$1.$2.$3-$4");
    console.log(novoCpf);
} else {
    console.log("CPF inválido");
}

if (validacaoCNPJ) {
    novoCnpj = novoCnpj.replace(/^([\d]{2})([\d]{3})([\d]{3})([\d]{4})([\d]{2})$/, "$1.$2.$3/$4-$5");
    console.log(novoCnpj);
} else {
    console.log("CNPJ inválido");
}

