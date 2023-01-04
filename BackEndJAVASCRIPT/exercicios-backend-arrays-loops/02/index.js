const letras = ["A", "a", "B", "C", "E", "e"];

let encontrada = false;
let quant = 0;

// loop
for (let i of letras) {
    if (i === "E" || i === "e") {
        encontrada = true;
        quant++;
    }
}

//validação
if (encontrada) {
    console.log(`Foram encontradas ${quant} letra(s) "E" ou "e".`);
} else {
    console.log(`Nenhuma letra "E" ou "e" foi encontrada.`);
}