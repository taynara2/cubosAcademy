const numeroCartao = '1111222233334444';

let cartaoOculto = numeroCartao;

// RegEx para desmembrar em grupos e ocultar grupos específicos.

cartaoOculto = cartaoOculto.replace(/^(\d{4})(\d{4})(\d{4})(\d{4})$/, "$1 **** **** $4");

console.log(cartaoOculto);