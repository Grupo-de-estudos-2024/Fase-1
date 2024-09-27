
let textos = require('./textos.json')
let introducao = textos.introdução

console.log(introducao)

let prompt = require('prompt-sync')();
prompt('Teste');
console.clear();

console.log("Tela Limpa")

let perguntas = require('./perguntas.json')

let gato = 0
let aguia = 0
let lobo = 0
let tubarao = 0

for(let i = 0; i < perguntas.length; i++){

    console.log(perguntas[i].pergunta)
    console.log(perguntas[i].resposta[0].animal + " " + perguntas[i].resposta[0].texto)
    console.log(perguntas[i].resposta[1].animal + " " + perguntas[i].resposta[1].texto)
    console.log(perguntas[i].resposta[2].animal + " " + perguntas[i].resposta[2].texto)
    console.log(perguntas[i].resposta[3].animal + " " + perguntas[i].resposta[3].texto)
    let resposta = prompt("Resposta: ")
    console.clear();

    while(resposta != "I" && resposta != "C" && resposta != "A" && resposta != "O"){
        console.log("Resposta inválida")
        resposta = prompt("Resposta: ")
    }

    switch(resposta){
        case "I" :
            aguia++
            console.log("Aguia ", aguia)
        break;

        case "C" :
            gato++
            console.log("Gato ", gato)
        break;

        case "O":
          lobo++
          console.log("Lobo ", lobo)
        break;

        case "A" :
         tubarao++
         console.log("Tubarao ", tubarao)
         break;

    }
    
}

let conclusao = textos.conclusão
console.log(conclusao)
prompt('Teste');
console.clear

let totalDeRespostas = aguia + lobo + gato + tubarao
aguia = (aguia / totalDeRespostas )* 100 
gato = (gato /  totalDeRespostas ) * 100
lobo = (lobo /  totalDeRespostas ) *100
tubarão = (tubarao /  totalDeRespostas ) * 100


console.log(`Você é ${aguia}% aguia`)
console.log(`Você é ${gato}% gato`)
console.log(`Você é ${lobo}% lobo`)
console.log(`Você é ${tubarao}% tubarao`)

let animalRelevante = textos.relevante
if(aguia > gato && aguia > lobo &&  aguia > tubarao){
    console.log("O animal mais relevante é a águia")
    console.log(animalRelevante.comportamentos.aguia)
    console.log(animalRelevante.pontosFortes.aguia)
    console.log(animalRelevante.pontosDemelhoria.aguia)
    console.log(animalRelevante.motivacoes.aguia)
} else if(gato > lobo && gato && tubarão){
    console.log("O animal mais relevante é o gato")
    console.log(animalRelevante.comportamentos.gato)
    console.log(animalRelevante.pontosFortes.gato)
    console.log(animalRelevante.pontosDemelhoria.gato)
    console.log(animalRelevante.motivacoes.gato)
}else if(lobo > tubarão){
    console.log("O animal mais relevante é o lobo")
    console.log(animalRelevante.comportamentos.lobo)
    console.log(animalRelevante.pontosFortes.lobo)
    console.log(animalRelevante.pontosDemelhoria.lobo)
    console.log(animalRelevante.motivacoes.lobo)
}else{
    console.log("O animal mais relevante é o tubarão")
    console.log(animalRelevante.comportamentos.tubarao)
    console.log(animalRelevante.pontosFortes.tubarao)
    console.log(animalRelevante.pontosDemelhoria.tubarao)
    console.log(animalRelevante.motivacoes.tubarao)

}

