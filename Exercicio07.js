let frase = prompt("Digite uma frase:");
let fraseNova = frase.toLowerCase().split(" ").join("");
let fraseInvertida = "";
for (let i = fraseNova.length - 1; i >= 0; i--) {
    fraseInvertida += fraseNova[i];
}
if (fraseNova === fraseInvertida) {
    alert("É um palíndromo!");
} else {
    alert("Não é um palíndromo.");
}
