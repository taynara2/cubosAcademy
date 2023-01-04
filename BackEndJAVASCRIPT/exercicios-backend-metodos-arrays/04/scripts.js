const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

const agendados = {
    agenda: [],

    agendar: function () {
        this.agenda = pacientes.splice(0, 1,);
        pacientes.push(this.agenda[0])
        this.agenda.shift();
    }
};


function atender() {
    pacientes.shift();
}

const { agenda, agendar } = agendados;

agendados.agendar();
atender();
agendados.agendar();
console.log(pacientes.join(", "));