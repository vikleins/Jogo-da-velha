// iniciar as minhas variáveis que são responsáveis de gerenciar 
// todo o estado do tabuleiro;

// 3 possibilidades: o escudo; a espada; e o vazio;

let tabuleiro = ['','','','','','','','',''];
let vezDoJogador = 0;
let simbolos = ['o', 'x'];

let gameOver = false;


let winStates = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

//quando eu clico em um dos quadrados, agora eu quero colocar nossos icones
// dentro do BeforeUnloadEvent, isso quer dizer que o player fez um movimento

// vai criar uma função de movimento, que vai receber a posição desse movimento

function movimento(posicao){

    if(gameOver){
        return;
    }
    // tabuleiro[posicao] é a posição que você quer fazer o movimento
    // no tabuleiro, daí vai colocar um simbolo dentro dele, e esse simbolo 
    // vai ser a vez do jogador
    if(tabuleiro[posicao]==''){
    tabuleiro[posicao] = simbolos[vezDoJogador];
    gameOver = isWin();//quer dizer: houve um vencedor na jogada?

    // uma vez que você coloca o simbolos lá, voce quer passar a vez pro prox jogador
    if(vezDoJogador == 0){
        vezDoJogador = 1;
    } else {
        vezDoJogador = 0;
    }

    return gameOver;
}

    //no final dessa função, a cada vez que o jogador 1 ou 0 começar, ele vai mudar de numero
    //para o sistema entender para passar a vez

}

function isWin(){
    

    for(let i =0; i < winStates.length; i++){
        let seq = winStates[i];
        
        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if(tabuleiro[pos1]==tabuleiro[pos2] &&
            tabuleiro[pos1]== tabuleiro[pos3] &&
            tabuleiro[pos1] != ''){

                return true;
            }
    }

    return false;
    }