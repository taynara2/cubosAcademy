const teste0 = `cubos
cuggbyos`
const teste1 = `cubos
cunsmdbfymal`
const teste2 = `sabado
sasdfglkbasvnupdxso`

const teste3 = `cubos
ucggbyos`



function solucao(input) {
    // separacao das senhas para melhor manipulacao - INICIO
    const senhas = input.split('\n')
    let senhaValida = senhas[0];
    let senhaInvalida = senhas[1];
    // separacao - FIM

    // validacao - INICIO
    let validacao = "";
    let seguranca2 = 0;
    for (let i = 0; i < senhaValida.length; i++) {

        for (let j = seguranca2; j < senhaInvalida.length; j++) {
            //senha invalida
            seguranca2++
            if (senhaInvalida[j] === senhaValida[i]) {
                validacao += senhaInvalida[j];
                break;
            }


        }
    }
    // validacao - FIM

    if (validacao === senhaValida) {
        return console.log("SIM");
    } else {
        return console.log("NAO");
    }


}


// solucao(teste)
// solucao(teste1)
// solucao(teste2)
solucao(teste0)
