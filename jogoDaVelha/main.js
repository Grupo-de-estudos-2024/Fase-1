let prompt = require('prompt-sync')();


console.log("Bem vindo ao JOGO DA VELHA")
prompt("Tecle enter para continuar ")
let tabuleiro = [1,2,3,4,5,6,7,8,9]
function imprimirTabuleiro(){
    console.log(tabuleiro[0] + ' | '  + tabuleiro[1] + ' | ' + tabuleiro[2])
    console.log('-----------')
    console.log(tabuleiro[3] + ' | '  + tabuleiro[4] + ' | ' + tabuleiro[5])
    console.log('-----------')
    console.log(tabuleiro[6] + ' | '  + tabuleiro[7] + ' | ' + tabuleiro[8])
}

let jogadorAtual = 'X'
let vencedor = ''
let deuVelha = true
function declararVencedor(){
        if(tabuleiro[0] == 'X' && tabuleiro[1] == 'X' && tabuleiro[2] ==  'X'){
            return 'X'
        } else if(tabuleiro[0] == 'O' && tabuleiro[1] == 'O' && tabuleiro[2] ==  'O'){
            return 'O'
        } else if(tabuleiro[3] == 'X' && tabuleiro[4] == 'X' && tabuleiro[5] ==  'X'){
            return 'X'
        } else if(tabuleiro[3] == 'O' && tabuleiro[4] == 'O' && tabuleiro[5] ==  'O'){
            return 'O'
        } else if(tabuleiro[6] == 'X' && tabuleiro[7] == 'X' && tabuleiro[8] ==  'X'){
            return 'X'
        } else if(tabuleiro[6] == 'O' && tabuleiro[7] == 'O' && tabuleiro[8] ==  'O'){
            return 'O'
        } else if(tabuleiro[0] == 'X' && tabuleiro[3] == 'X' && tabuleiro[6] ==  'X'){
            return 'X'
        } else if(tabuleiro[0] == 'O' && tabuleiro[3] == 'O' && tabuleiro[6] ==  'O'){
            return 'O'
        } else if(tabuleiro[2] == 'X' && tabuleiro[5] == 'X' && tabuleiro[8] ==  'X'){
            return 'X'
        } else if(tabuleiro[2] == 'O' && tabuleiro[5] == 'O' && tabuleiro[8] ==  'O'){
            return 'O'
        } else if(tabuleiro[0] == 'X' && tabuleiro[4] == 'X' && tabuleiro[8] ==  'X'){
            return 'X'
        }else if(tabuleiro[0] == 'O' && tabuleiro[2] == 'O' && tabuleiro[8] ==  'O'){
            return 'O'
        } 
     
}
for(let i = 0; i < tabuleiro.length;i++){
    console.clear();
    imprimirTabuleiro()
    let campo = prompt("Selecione o campo desejado ")
    tabuleiro[campo-1] =  jogadorAtual


    if(jogadorAtual == 'X'){
        jogadorAtual = '0'
    } else {
        jogadorAtual = 'X'
    }
    
    vencedor = declararVencedor()
    if(vencedor == 'X' || vencedor == 'O'){
        deuVelha = false
        console.log("JOGO FINALIZADO! O vencedor é o " + vencedor)
        break
    }
    
}
if(deuVelha){
    console.log("JOGO FINALIZADO! DEU VELHA")
}