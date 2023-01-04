const teste = `3
0 0
0 3
4 0`;





function solucao(input) {
    // tratamento de coordenadas - INICIO
    const separacao = input.split('\n')
    const coordenada = []
    for (let i = 1; i < separacao.length; i++) {
        const sep = separacao[i].split(' ')
        coordenada.push({ x: sep[0], y: sep[1] })
    }
    // tratamento de coordenadas - FIM

    // formula - INICIO
    const formula = (xa, ya, xb, yb) => {
        let calculo = Math.sqrt(Math.pow((xb - xa), 2) + Math.pow((yb - ya), 2));
        return calculo;
    }
    //formula  - FIM

    // tratativa
    let tratativa1 = 0;
    let tratativa2 = 0;
    for (let i = 0; i < coordenada.length; i++) {
        //primeira pessoa
        for (let j = 1; j < coordenada.length; j++) {
            //segunda pessoa
            tratativa1 = formula(coordenada[i].x, coordenada[i].y, coordenada[j].x, coordenada[j].y);

            if (tratativa1 > tratativa2) {
                tratativa2 = tratativa1;
            }
        }

    }
    return console.log(tratativa2);
}

solucao(teste);

