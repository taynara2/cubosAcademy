const nota = 7;

// Condicionais dos conceitos.
let conceitoA = (nota >= 9) ? true : false;
let conceitoB = (nota >= 8 && nota <= 8.9) ? true : false;
let conceitoC = (nota >= 6 && nota <= 7.9) ? true : false;
let conceitoD = (nota >= 4 && nota <= 5.9) ? true : false;
let conceitoE = (nota < 4) ? true : false;


// Conversão no console.
if (conceitoA) {
    console.log("O estudando obteve conceito A.");
} else if (conceitoB) {
    console.log("O estudando obteve conceito B.");
}
else if (conceitoC) {
    console.log("O estudando obteve conceito C.");
}
else if (conceitoD) {
    console.log("O estudando obteve conceito D.");
} else {
    console.log("O estudando obteve conceito E.");
}