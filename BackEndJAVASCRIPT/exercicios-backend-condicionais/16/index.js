//Só é considerado de maior se a idade for maior ou igual a 18.
const idadeDoAluno = 17;

//valor verdadeiro ou falso que informa se possui responsável
const possuiResponsavel = false;

// Método de validação
let validacao = (idadeDoAluno > 17 || possuiResponsavel);

//Condicional
if (validacao) {
    console.log("Rematricula relizada com sucesso!");
} else {
    console.log("Não é possível fazer a rematrícula.");
}
