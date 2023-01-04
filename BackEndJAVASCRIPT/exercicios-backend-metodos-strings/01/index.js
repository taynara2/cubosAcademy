const comentario = "Esse C0VID é muito perigoso!";


let censura = comentario.includes("COVID");

if (censura) {
    console.log("Comentário bloqueado por conter palavras proibidas");
} else {
    console.log("Comentário autorizado.");
}