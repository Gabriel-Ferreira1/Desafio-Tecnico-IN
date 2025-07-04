function verificarIdades(Nascimento){
    let Ano = parseInt(prompt("Digite o ano atual:"))
    let resultado= []
    for (let i=0; i < Nascimento.length; i++){
        let idade = Ano - Nascimento[i]
        if (idade>=18){
            resultado.push("Maior de idade")        
        }
        else {
            resultado.push("Menor de idade")
        }
    }
    for (i=0; i < resultado.length; i++){
        console.log(`Pessoa ${i+1}: ${resultado[i]} `)
    }
}
let anos = [] //Array dos anos de nascimento
verificarIdades(anos)