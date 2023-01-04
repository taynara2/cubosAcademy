const cpf = "011.022.033-44";

let newCpf = cpf.replace(/\.|\-/g, "")

console.log(newCpf);