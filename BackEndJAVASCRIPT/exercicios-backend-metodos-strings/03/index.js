const texto = "Aprenda programar do zero na Cubos Academy";

let newTexto = texto.toLowerCase();

//! Substituição com RegEx
newTexto = newTexto.replace(/\s/g, "-");

//! Substituição com replace all
// newTexto = newTexto.replaceAll(" ", "-");

console.log(newTexto);