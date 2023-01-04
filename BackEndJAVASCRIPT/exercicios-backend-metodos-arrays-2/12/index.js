const pessoas = [
    {
        nome: "Antonio",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Maria",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador",
    },
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista",
    },
    {
        nome: "Marcos",
        idade: 20,
        profissao: "Deputado",
    },
];

const progMais20 = pessoas.filter((pessoa) => {
    return pessoa.profissao === "Programador" && pessoa.idade > 20;
});

console.log(progMais20);

const jornMais30 = pessoas.filter((pessoa) => {
    return pessoa.profissao === "Jornalista" && pessoa.idade > 30;
});

console.log(jornMais30);

const profMenos29 = pessoas.filter((pessoa) => {
    return pessoa.idade < 29 && (pessoa.profissao === "Programador" || pessoa.profissao === "Jornalista");
});

console.log(profMenos29);