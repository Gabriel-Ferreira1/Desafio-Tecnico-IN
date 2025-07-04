let vetor = [];
let quantidade = parseInt(prompt("Quantos números você quer inserir?"));
for (let i = 0; i < quantidade; i++) {
    let numero = parseInt(prompt(`Digite o ${i + 1}º número:`));
    vetor.push(numero);
}
let contadorCrescente = 0;
for (let i = 1; i < vetor.length; i++) {
    if (vetor[i] > vetor[i - 1]) {
        contadorCrescente++;
    }
}
console.log("Vetor inserido:", vetor);
console.log("Quantidade de números em ordem crescente:", contadorCrescente);
