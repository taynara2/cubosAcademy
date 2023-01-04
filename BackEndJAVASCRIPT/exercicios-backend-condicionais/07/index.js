const aposentada = true;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000;

//seu código aqui

// Validação para se precisa ou não de declaração de imposto
let validacao = (aposentada || portadoraDeDoenca);

// Mensagem a ser mostrada dependendo da condicional.
if (totalDeRendimentos < 2855970) {
    console.log("VAZA LEÃO! JA TA DIFICIL SEM VOCE");
} else if (validacao) {
    console.log("Isenta.");
} else {
    console.log("PEGA LEÃO!");
}


//! Otimizado 