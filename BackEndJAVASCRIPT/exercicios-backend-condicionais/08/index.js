const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

// Validação geral
let validacao = (altura > 150 && idade > 12 && idade < 65 && possuiPatologia === false);

// Validação categorizada
if (validacao && ehEstudante) {
    console.log("Sua entrada custa R$10.");
} else if (validacao === true) {
    console.log("Sua entrada custa R$20.");
} else {
    console.log("ACESSO NEGADO");
}