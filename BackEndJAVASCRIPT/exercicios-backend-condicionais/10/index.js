const caractere = "";

// Validação
let vogal = ((caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u") ? true : false);

let vogalM = ((caractere === "A" || caractere === "E" || caractere === "I" || caractere === "O" || caractere === "U") ? true : false);

let numero = ((caractere === 1 || caractere === 2 || caractere === 3 || caractere === 4 || caractere === 5 || caractere === 6 || caractere === 7 || caractere === 8 || caractere === 9) ? true : false);


//Resposta 
if (numero) {
    console.log("É um número.");
} else if (vogal) {
    console.log("É uma vogal minúscula.");

} else if (vogalM) {
    console.log("É uma vogal maiúscula.");
} else {
    console.log("É uma consoante.");
}