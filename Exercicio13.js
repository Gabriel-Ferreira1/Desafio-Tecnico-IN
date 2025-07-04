let time = [];
while (true) {
    let menu = "=== Gerenciador de Jogadores ===\n";
    menu += "1 - Adicionar jogador\n";
    menu += "2 - Buscar por posição\n";
    menu += "3 - Listar time\n";
    menu += "4 - Calcular pontuação média\n";
    menu += "5 - Sair\n";
    let opcao = prompt(menu);
    if (opcao === "1") {
        let nome = prompt("Digite o nome do jogador:");
        let idade = parseInt(prompt("Digite a idade do jogador:"));
        let posicao = prompt("Digite a posição do jogador:");
        let pontuacao = parseInt(prompt("Digite a pontuação do jogador:"));
        if (nome && posicao && idade && pontuacao) {
            let jogador = {
                nome,
                idade,
                posicao,
                pontuacao
            };
            time.push(jogador);
            alert(`${nome} foi adicionado ao time!`);
        } else {
            alert("Dados inválidos. Tente novamente.");
        }
    } else if (opcao === "2") {
        let posicaoBusca = prompt("Digite a posição para buscar:");
        let encontrados = time.filter(j => j.posicao.toLowerCase() === posicaoBusca.toLowerCase());
        if (encontrados.length === 0) {
            alert("Nenhum jogador encontrado para essa posição.");
        } else {
            let resultado = "Jogadores encontrados:\n";
            encontrados.forEach(j => {
                resultado += `${j.nome} - ${j.idade} anos - ${j.posicao} - ${j.pontuacao} pontos\n`;
            });
            alert(resultado);
        }
    } else if (opcao === "3") {
        if (time.length === 0) {
            alert("Nenhum jogador cadastrado.");
        } else {
            let lista = "Jogadores cadastrados:\n";
            time.forEach((j, i) => {
                lista += `${i + 1}. ${j.nome} - ${j.idade} anos - ${j.posicao} - ${j.pontuacao} pontos\n`;
            });
            alert(lista);
        }
    } else if (opcao === "4") {
        if (time.length === 0) {
            alert("Nenhum jogador para calcular média.");
        } else {
            let soma = time.reduce((total, j) => total + j.pontuacao, 0);
            let media = soma / time.length;
            alert(`Pontuação média do time: ${media}`);
        }
    } else if (opcao === "5") {
        alert("Encerrando o programa...");
        break;

    } else {
        alert("Opção inválida. Tente novamente.");
    }
}
