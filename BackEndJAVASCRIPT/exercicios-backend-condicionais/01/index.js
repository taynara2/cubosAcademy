const jogador1 = "papel"
const jogador2 = "tesoura"

//seu código aqui

if (jogador1 === jogador2) {
    console.log("Empate! Jogue novamente!");
}
//? Verificação para o papel
else if (jogador1 === "papel" && jogador2 === "pedra") {
    console.log(`A vitória vai para o Jogador 1 com : ${jogador1}!`);
}
/*else if (jogador1 === "papel" && jogador2 === "tesoura") {
    console.log(`A vitória vai para o Jogador 2 com : ${jogador2}!`);
}*/

//? Verificação para o pedra
else if (jogador1 === "pedra" && jogador2 === "tesoura") {
    console.log(`A vitória vai para o Jogador 1 com : ${jogador1}!`);
}
/*else if (jogador1 === "pedra" && jogador2 === "papel") {
   console.log(`A vitória vai para o Jogador 2 com : ${jogador2}!`);
}*/

//? Verificação para o tesoura
else if (jogador1 === "tesoura" && jogador2 === "papel") {
    console.log(`A vitória vai para o Jogador 1 com : ${jogador1}!`);
} else {
    console.log(`A vitória vai para o Jogador 2 com : ${jogador2}!`);
}

/* else if (jogador1 === "tesoura" && jogador2 === "pedra") {
    console.log(`A vitória vai para o Jogados 2 com : ${jogador2}!`);
}*/

//! Código otimizado.
