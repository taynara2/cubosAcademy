const carro = {
    ligado: false,
    velocidade: 0,

    ligar: function () {
        if (ligado) {
            console.log("Este carro já está ligado");
        } else {
            ligado = true;
            console.log("O carro foi ligado");
        }
        estado();
    },

    desligar: function () {
        if (!ligado) {
            console.log("Este carro já está desligado");
        } else {
            ligado = false;
            console.log("O carro foi desligado");
        }
        estado();
    },

    acelerar: function () {
        if (ligado) {
            velocidade += 10;
            console.log(`A velocidade atual é de: ${velocidade} `);
        } else {
            velocidade = 0;
            console.log("Não é possível acelerar um carro desligado");
        }
        estado();
    },

    desacelerar: function () {
        if (ligado && velocidade > 0) {
            velocidade -= 10;
            console.log(`A velocidade atual é de: ${velocidade} `);
        } else if (velocidade === 0) {
            console.log("O carro já está parado.");
        } else {
            velocidade = 0;
            console.log("Não é possível desacelerar um carro desligado");
        }
        estado();
    },
    estado: function () {
        console.log(`Carro: ${ligado ? "Ligado" : "Desligado"}, Velocidade: ${velocidade}km/h.`);

    }

}

let { ligado, velocidade, estado } = carro;


carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();
