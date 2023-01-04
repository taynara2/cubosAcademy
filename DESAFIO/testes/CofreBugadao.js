//? Código do prof. Leonel


const teste0 = `cubos
cuggbyos`
const teste1 = `cubos
cunsmdbfymal`
const teste2 = `sabado
sasdfglkbasvnupdxso`

const teste3 = `cubos
ucggbyos`

function solucao(input) {
    const senhas = input.split('\n')
    let senhaValida = senhas[0];
    let senhaInvalida = senhas[1];

    //!teste 2
    for (let caractere of senhaValida) {
        let charIndex = senhaInvalida.indexOf(caractere);
        if (charIndex !== -1) {
            console.log("NAO")
            break;
        } else {
            senhaInvalida = senhaInvalida.slice(charIndex + 1);
        }
    }
    console.log("SIM")
}

// solucao(teste)
// solucao(teste1)
// solucao(teste2)
solucao(teste0)