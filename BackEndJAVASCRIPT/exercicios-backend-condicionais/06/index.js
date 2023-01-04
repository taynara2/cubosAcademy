const alturaEmCm = 86;

//seu código aqui

let validacao = (alturaEmCm >= 180 ? true : false);

if (!validacao) {
    console.log("Reprovado");
} else if (alturaEmCm >= 180 && alturaEmCm <= 185) {
    console.log("Líbero");
} else if (alturaEmCm >= 186 && alturaEmCm <= 195) {
    console.log("Ponteiro");
} else if (alturaEmCm >= 196 && alturaEmCm <= 205) {
    console.log("Oposto");
} else if (alturaEmCm > 205) {
    console.log("Central");
}