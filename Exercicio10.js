let fila = [];
while (true) {
    let menu = "Fila de Espera:\n";
    if (fila.length === 0) {
        menu += "(vazia)\n";
    } else {
        menu += fila.map((cliente, index) => `${index + 1}º ${cliente}`)+ "\n";
    }
    menu += "\nEscolha uma opção:\n";
    menu += "1 - Novo Cliente\n";
    menu += "2 - Atender Cliente\n";
    menu += "3 - Sair\n";
    let opcao = prompt(menu);
    if (opcao === "1") {
        let nome = prompt("Digite o nome do novo cliente:");
        if (nome) {
            fila.push(nome);
            alert(`${nome} foi adicionado(a) à fila.`);
        }
    } else if (opcao === "2") {
        if (fila.length === 0) {
            alert("Não há clientes na fila.");
        } else {
            let atendido = fila.shift();
            alert(`Atendendo: ${atendido}`);
        }
    } else if (opcao === "3") {
        alert("Encerrando o programa...");
        break;
    } else {
        alert("Opção inválida. Tente novamente.");
    }
}
