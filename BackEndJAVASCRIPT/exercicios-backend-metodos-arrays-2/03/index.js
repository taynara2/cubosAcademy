const lista = ["arroz", "feijão", "carne", "cerveja", "macarrão"]

const estaLegal = lista.some((item) => {

    return item === "cerveja" || item === "vodka" ? true : false;
});

if (estaLegal) {
    console.log("Tudo certo, vamos as compras!");
} else {
    console.log("Revise sua lista, há bebida com venda proibida.");
}