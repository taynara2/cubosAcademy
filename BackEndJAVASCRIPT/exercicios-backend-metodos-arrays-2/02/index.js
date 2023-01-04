const palavras = ["livro", "caeta", "sol", "carro", "oelha"];


//!com  function, fof e validação
// function parametro(palavra) {
//     let validacao = false;
//     for (let item of palavra) {
//         if (item.length > 5) {
//             validacao = false;
//             break;
//         } else {
//             validacao = true;
//         }
//     }

//     // Saida de texto dependente do parametro validação.
//     if (!validacao) {
//         return console.log(`Existe uma palavra invalida.`);
//     } else {
//         return console.log(`Array validado`);
//     }
// }
// parametro(palavras);


//! validação de array feita com every

const parametro = palavras.every((palavra) => {
    return palavra.length < 6;
});

if (!parametro) {
    console.log(`Existe uma palavra invalida.`);
} else {
    console.log(`Array validado`);
}
