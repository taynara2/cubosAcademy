let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

//? identificador de 6 digitos auto completado com 0.
let newIdentificador = identificador.padStart(6, "0");


//? A primeira Letra em maiúsculo.
const arrayNome = nome.split(" ");
let newNome = "";
for (let i of arrayNome) {
    let primeiraLetra = i.slice(0, 1);
    let restanteNome = i.slice(1);

    newNome += primeiraLetra.toUpperCase() + restanteNome + " ";
}


//? Email sem espaços.
let newEmail = email;
newEmail = newEmail.replace(/\s/g, "");




console.log(newIdentificador);
console.log(newNome);
console.log(newEmail);