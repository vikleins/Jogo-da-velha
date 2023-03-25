// a primeira coisa que eu quero é ser capaz de reagir a
//  algum evento do usuário

// para isso é necessário garantir que o evento já foi carregado;

document.addEventListener('DOMContentLoaded', ()=>{


    //primeira coisa é pegar todos os elementos do HTML com a classe square
    let squares = document.querySelectorAll(".square");
    //todos os elementos da classe .square dentro da let squares;
    //para cada um desses elementos, adicionar um evento Click, para saber quando
    //cada quadrado foi clicado;
    squares.forEach((square)=>{
        square.addEventListener('click', handleClick);
    })

})

//agora vamos chamar criar handleClick;

function handleClick(evento){
    //sabe qual quadrado foi clicado;
    console.log(evento.target);
    
    // cria um square que vai receber o evento apontado, 
    let square = evento.target;
    //square representa qual elemento que foi clickado, e esse elemento clicado vai ter um ID,
    // esse ID vai ser exatamente a posição que eu quero fazer o movimento:
    let posicao = square.id;
 
    //movimento relacionado com a posição
    if(movimento(posicao)){


        setTimeout(()=> {
            if(vezDoJogador==0){
                vezDoJogador = 1;
            }else{
                vezDoJogador = 0;
            }
            alert("O jogo acabou - O vencedor foi "+ simbolos[vezDoJogador]);

        }, 10);

    }
    updateSquares();
}

function updateSquares(){
        // vai pegar todos os squares e para cada square qual que é o simbolo 
        // que esta referente no tabuleiro
        let squares = document.querySelectorAll(".square")

        squares.forEach((square)=> {
            // vou criar a posicao 
            let posicao = square.id;
            //já tenho acesso as variaveis dentro de game
            let simbolo = tabuleiro[posicao];
           
            // se esse simbolo for diferente de vazio, ai faz update em square
            if(simbolo != ''){
                square.innerHTML = `<div class = '${simbolo}'></div>`
            }

        })
    }
