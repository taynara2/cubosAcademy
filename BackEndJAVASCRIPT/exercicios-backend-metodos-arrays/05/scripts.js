const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];


const gerencia = {
    agenda: [],

    agendarPaciente: function () {
        this.agenda = pacientes.splice(0, 1,);
        pacientes.push(this.agenda[0])
        this.agenda.shift();
        console.log(pacientes.join(', '));
    },
    atenderPaciente: function () {
        pacientes.shift();
        console.log(pacientes.join(', '));
    },
    cancelarAtendimento: function () {
        pacientes.shift();
        console.log(pacientes.join(', '));
    },
};


gerencia.agendarPaciente();
gerencia.atenderPaciente();
gerencia.cancelarAtendimento();