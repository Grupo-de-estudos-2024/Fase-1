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
    console.log("1. " + perguntas[i].resposta[0].texto);
    console.log("2. " + perguntas[i].resposta[1].texto);
    console.log("3. " + perguntas[i].resposta[2].texto);
    console.log("4. " + perguntas[i].resposta[3].texto);
    let resposta = prompt("Resposta: ")
    console.clear();

    while(resposta != "1" && resposta != "2" && resposta != "3" && resposta != "4"){
        console.log("Resposta inválida")
        resposta = prompt("Resposta: ")
    }

    switch(resposta){
        case "1" :
            if(perguntas[i].resposta[0].animal == "I") aguia++
            if(perguntas[i].resposta[0].animal == "C") gato++ 
            if(perguntas[i].resposta[0].animal == "O") lobo++ 
            if(perguntas[i].resposta[0].animal == "A") tubarao++ 
        break;

        case "2" :
            if(perguntas[i].resposta[1].animal == "I") aguia++
            if(perguntas[i].resposta[1].animal == "C") gato++ 
            if(perguntas[i].resposta[1].animal == "O") lobo++ 
            if(perguntas[i].resposta[1].animal == "A") tubarao++
        break;

        case "3":
            if(perguntas[i].resposta[2].animal == "I") aguia++
            if(perguntas[i].resposta[2].animal == "C") gato++ 
            if(perguntas[i].resposta[2].animal == "O") lobo++ 
            if(perguntas[i].resposta[2].animal == "A") tubarao++
        break;

        case "4" :
            if(perguntas[i].resposta[3].animal == "I") aguia++
            if(perguntas[i].resposta[3].animal == "C") gato++ 
            if(perguntas[i].resposta[3].animal == "O") lobo++ 
            if(perguntas[i].resposta[3].animal == "A") tubarao++
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