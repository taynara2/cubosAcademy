const email = "aluno@cubos.academy";

// ! /^[primeira cadeia de caracter]+@[segunda cadeia de caracter]+.[terceira cadeia de caracter]+.[se houver, quarta cadeia de caracter]
const validacao = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;


console.log('jose@cubos.academy =', validacao.test('jose@cubos.academy'));
console.log('jose@cubos.academy.br=', validacao.test('jose@cubos.academy.br'));
console.log('jose.messias@cubos.academy =', validacao.test('jose.messias@cubos.academy'));
console.log('jose.messias@cubos.io =', validacao.test('jose.messias@cubos.io'));
console.log('jose@cubos =', validacao.test('jose@cubos'));// ? não tem como isso ser um email válido, nem sequer aponta pra hospedagem.
console.log('jose.messias@cubos =', validacao.test('jose.messias@cubos'));
console.log('jose.messias@. =', validacao.test('jose.messias@.'));
console.log('jose.@cubos =', validacao.test('jose.@cubos'));// ? não tem como isso ser um email válido, nem sequer aponta pra hospedagem.
console.log('.@ =', validacao.test('.@'));
console.log('@. =', validacao.test('@.'));
console.log('jose.messias@cubos. =', validacao.test('jose.messias@cubos.'));
console.log('.messias@cubos. =', validacao.test('.messias@cubos.'));
console.log('.messias@cubos =', validacao.test('.messias@cubos'));

//console.log(' =', validacao.test(''));

