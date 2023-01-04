const nome = 'Guido Cerqueira';
let lowerNome = nome.toLowerCase();
let arrayNome = lowerNome.split(' ');
let nick = "@";


// ? FOR para percorrer dentro do nome adicionando caracter por caracter até dar 13 digitos.

for (let i = 0; i < arrayNome.length; i++) {

    for (let j = 0; j < arrayNome[i].length; j++) {
        if (nick.length === 13) {
            break;
        } else {
            nick += arrayNome[i][j];
        }
    }
}



console.log(nick);
