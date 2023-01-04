const celular = 61899998888;

let newCelular = celular.toString();


//! Com RegEx
// if (newCelular.length === 11) {
//     newCelular = newCelular.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})$/, "($1) $2 $3-$4");
//     console.log(newCelular);
// } else if (newCelular.length === 9) {
//     newCelular = newCelular.replace(/^(\d{1})(\d{4})(\d{4})$/, "$1 $2-$3");
//     console.log(newCelular);
// } else {
//     console.log("Número inválido");
// }


let celularFor = "(xx) x xxxx-xxxx";
let celularFor2 = "x xxxx-xxxx";

for (let i = 0; i < newCelular.length; i++) {
    if (newCelular.length === 11) {
        celularFor = celularFor.replace("x", newCelular[i]);
    } else if (newCelular.length === 9) {
        celularFor2 = celularFor2.replace("x", newCelular[i]);
    } else {
        console.log("Número inválido");
    }
}
console.log(celularFor);
console.log(celularFor2);