let continuar = true;
while (continuar) {
    let numero;
    while(true){
        numero =parseInt(prompt("Digite um número inteiro positivo:"));
        if (numero > 0) {
            break;
        } else {
            alert("Por favor, digite um número inteiro positivo válido.");
        }
    }
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }
    console.log(`O fatorial de ${numero} é ${fatorial}.`);
    let resposta = prompt("Deseja calcular outro fatorial? (S/N)");
    if (resposta == "s" || resposta== "S" ){
        continuar= true;
    }
    else if (resposta == "n" || resposta== "N") {
        continuar = false;
        console.log(("Programa encerrado."));
    }
    else{
        console.log("Opção Inválida.")
        continuar = false
    }
}

