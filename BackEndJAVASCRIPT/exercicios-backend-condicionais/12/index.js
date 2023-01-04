const diaDaSemana = 6;

// Os dias e suas emoções.
const dia = ['Viagem Espacial (ʘ ͟ʖ ʘ)', 'Segunda Feira ( ᓀ _ᓀ )', 'Terça Feira (╬ Ò﹏Ó)	', 'Quarta Feira _:(´ཀ`」 ∠):_ ', 'Quinta Feira ┐(￣∀￣)┌	', 'Sexta Feira (っಠ‿ಠ)っ ', 'Sabado  	(ง ื▿ ื)ว	', 'Domingo (ಥ﹏ಥ)'];


//Validação do dia
if (diaDaSemana >= 1 && diaDaSemana <= 7) {
    console.log(`Hoje é ${dia[diaDaSemana]}`);
} else {
    console.log('Informação fornecida inválida.');
}
