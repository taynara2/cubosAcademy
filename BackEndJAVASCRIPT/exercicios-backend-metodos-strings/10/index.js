const nomeArquivo = 'Foto da Familia.pdf';
const nomeArquivo2 = 'Foto da Familia.png';

let validacao = nomeArquivo.split('.');

formato = validacao[1] === "png" || validacao[1] === "jpg" || validacao[1] === "jpeg" || validacao[1] === "gif" ? "Arquivo válido" : "Arquivo inválido";



console.log(formato);