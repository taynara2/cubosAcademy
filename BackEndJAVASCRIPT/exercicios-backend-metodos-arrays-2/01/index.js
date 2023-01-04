const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];

const nomeDoLivro = "Guerra e Paz";

// const posicao = livros.indexOf(nomeDoLivro) + 1;

// console.log(`O livro ${nomeDoLivro} está na posição ${posicao}`);

function encontrarLivro(nomeDoLivro) {
    const posicao = livros.indexOf(nomeDoLivro);
    if (posicao === -1) {
        return console.log(`O livro ${nomeDoLivro} não foi encontrado`);
    } else {
        return console.log(`O livro ${nomeDoLivro} está na posição ${posicao + 1}`);
    }
}

encontrarLivro(nomeDoLivro);