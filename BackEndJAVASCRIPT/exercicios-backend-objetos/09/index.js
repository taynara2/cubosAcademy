const participantes = [
    { nome: "João" },
    { nome: "Ana" },
    { nome: "Beatriz" },
    { nome: "Maria" },
    { nome: "Ana Clara" },
    { nome: "Joana" },
    { nome: "Augusto" },
    { nome: "Renan" },
    { nome: "Patricia" },
    { nome: "Carlos" },
    { nome: "Renato" },
    { nome: "José" },
    { nome: "Roberto" },
    { nome: "Sara" },
    { nome: "Junior" },
    { nome: "Pedro" },
    { nome: "Vitor" },
    { nome: "Antonio" },
]

let local = 1;
for (let i = 0; i < participantes.length; i++) {
    if (participantes[i].nome === "Carlos") {
        console.log(`Galera... ${participantes[i].nome} está na posição ${local}, corre lá!`);
        break;
    }
    local++;
}