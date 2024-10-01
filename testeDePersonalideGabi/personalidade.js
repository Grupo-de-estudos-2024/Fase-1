let textos = require('./textos.json')
let introducao = textos.introdução

console.log(introducao)

let prompt = require('prompt-sync')();
prompt('Enter');
console.clear();


let perguntas = require('./perguntas.json')

let gato = 0
let aguia = 0
let lobo = 0
let tubarao = 0

for(let i = 0; i < perguntas.length; i++){

    console.log("Pergunta " + (i + 1) + " " + perguntas[i].pergunta)

    perguntas[i].resposta.sort(() => 0.5 - Math.random())
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
        break;

        case "C" :
            gato++
        break;

        case "O":
          lobo++
        break;

        case "A" :
         tubarao++
         break;

    }
    // console.log("Aguia ", aguia)
    // console.log("Gato ", gato)
    // console.log("Lobo ", lobo)
    // console.log("Tubarao ", tubarao)
    
}

let conclusao = textos.conclusão
console.log(conclusao)
prompt('Enter');
console.clear

aguia = aguia * 4
gato = gato * 4
lobo = lobo * 4
tubarao = tubarao * 4


console.log(`Você é ${aguia}% aguia`)
console.log(`Você é ${gato}% gato`)
console.log(`Você é ${lobo}% lobo`)
console.log(`Você é ${tubarao}% tubarao`)


function obterAnimalRelevante(animalRelevante) {
    let animal = "";

    if (aguia > gato && aguia > lobo && aguia > tubarao) {
        animal = "aguia";
    } else if (gato > aguia && gato > lobo && gato > tubarao) {
        animal = "gato";
    } else if (lobo > aguia && lobo > gato && lobo > tubarao) {
        animal = "lobo";
    } else {
        animal = "tubarao";
    }

    console.log(
        `O animal mais relevante é o ${animal} \n
        Comportamentos: ${animalRelevante.comportamentos[animal]} \n
        Pontos Fortes: ${animalRelevante.pontosFortes[animal]} \n
        Pontos de Melhoria: ${animalRelevante.pontosDemelhoria[animal]} \n
        Motivações: ${animalRelevante.motivacoes[animal]}`)
}

let relevante = textos.relevante
obterAnimalRelevante(relevante)