// Quanto de desconto necessito para comprar um tênis


// Valor possuido para a compra
let valorPossuido = 700;
// Valor do produto
let valorNecessario = 1280;
// Porcentagem do valor possuido
let pPossuido = (valorPossuido * 100) / valorNecessario;
// Desconto em % necessário para a compra.
let desconto = (pPossuido - 100) * (-1);

console.log(`Você só possui ${pPossuido.toFixed(2)}% do valor necessário para o produto. Logo é necessário um desconto de pelo menos ${desconto.toFixed(2)}%.`);