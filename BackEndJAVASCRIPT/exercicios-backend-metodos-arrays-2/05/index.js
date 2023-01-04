const usuarios = [
    {
        nome: "André",
        idade: 29,
        habilitado: false,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: false,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
];

// * Primeiro há um filtro para a idade ideal(filter), depois um filtro para saber se o usuário está habilitado(every).

const usuariosHabilitados = usuarios.filter((usuario) => {
    return usuario.idade >= 18 && usuario.idade <= 65;
}).every((item) => {
    if (item.habilitado) {
        return true;
    } else {
        return false;
    }
});

if (usuariosHabilitados) {
    console.log("Todos passaram no teste");
} else {
    console.log("Todos precisam estar habilitados");
}