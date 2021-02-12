//Declara todas a variaveis necessárias
let windowWidth = window.innerWidth,
    windowHeight = window.innerHeight,
    frames = 0,
    gameover = 4,
    font = 'normal 20pt arial', 
    status = 'jogand',
    speedPlayer = 20,
    widthPlayer = 70,
    heightPlayer = 20,
    speedGame = 5,
    pontosP1 = 0,
    pontosP2 = 0
;

//Determina o Tamanho da Tela
if(windowWidth >= 800){
    windowWidth = 800;
    windowHeight = 600;
};

//Declara os Objetos do jogo
let canvas = document.getElementById('canvas'),
    backgrond = new CanvasElement('Retangulo', windowHeight, windowWidth, 0, 0, '#000'),
    player1 = new CanvasElement('Retangulo', widthPlayer, heightPlayer, 10, 100, '#ffff'),
    player2 = new CanvasElement('Retangulo',widthPlayer, heightPlayer, 10, 100, '#ffff'),
    bola = new CanvasElement('Circulo', 0, 0, 100, 100, '#ffff', 10, speedGame),
    placarP1 = new CanvasElement('Text', 0, 0, 100, 100, 'ffff',0,0, `Player I - ${pontosP1}`, font),
    placarP2 = new CanvasElement('Text', 0, 0, 200, 200, 'ffff',0,0, `Player II - ${pontosP1}`, font)
;

bola.Mover = ()=>{

    bola.x += bola.velx;
    bola.y += bola.vely;

    let bolacolid_D = bola.x + bola.raio+3,
        bolacolid_E = bola.x - bola.raio-3,
        bolacolid_C = bola.y - bola.raio-3,
        bolacolid_B = bola.y + bola.raio+3
    ;


    if(bolacolid_D > windowWidth){
        bola.velx = -bola.velx;
        placarP1.texto = `Player I - ${pontosP1+=1}`
        gameOver();
    }else if(bolacolid_E < 0){
        bola.velx = -bola.velx;
        placarP2.texto = `Player II - ${pontosP2+=1}`
        gameOver();
    }else if(bolacolid_C < 0 || bolacolid_B > windowHeight){
        bola.vely = -bola.vely;
    };

    
};

//Move os jogadores
window.addEventListener('keypress', (event)=>{
    //player2.y += speedPlayer;
    console.log(event.key);
})

function restart(){
    status = 'Pause'
    pontosP1 = 0;
    pontosP2 = 0;
    placarP1.texto = `Player I - ${pontosP1}`;
    placarP2.texto = `Player II - ${pontosP2}`;
    bola.x = windowWidth/2 - 330;
    bola.y = windowHeight/2;
};

function gameOver(){
    if(pontosP1 == gameover){
        status = 'Pause'
        placarP1.texto = 'You Win'
        let time = setInterval(()=>{
            clearInterval(time)
            restart();
        },3000);

    }else if(pontosP2 == gameover){
        status = 'Pause'
        placarP2.texto = 'You Win'
        let time = setInterval(()=>{
            clearInterval(time)
            restart();
        },3000);
    };
};

//Insere o Painel e Opções
let painel = document.createElement('div');
painel.setAttribute('class', 'confg');
painel.innerHTML = ''+
    '<input type="button" value="|>">'+
    '<input type="button" value="||">'+
    '<input type="button" value="Restart">'
;
document.body.appendChild(painel);


//Inicializa o jogo
function main(){
    painel.style.display = 'none'
    canvas.width = windowWidth;
    canvas.height = windowHeight;
    canvas = canvas.getContext('2d');

    bola.x = windowWidth/2;
    bola.y = windowHeight/2;
    player1.y = windowHeight/2 - player1.altura/2
    player2.y = windowHeight/2 - player2.altura/2
    player2.x = windowWidth-player2.largura - 10
    

    //Loop do Jogo
    function roda(){
        if(status == 'jogando'){
            atualisa();
        };
        desenha();
        window.requestAnimationFrame(roda);
    };
    //Desenha os CanvasElements
    function desenha(){
        backgrond.desenha(canvas);
        player1.desenha(canvas);
        player2.desenha(canvas);
        bola.desenha(canvas);
        placarP1.desenha(canvas);
        placarP2.desenha(canvas);
        
    };
    //Atualiza os quadros do jogo
    function atualisa(){
    frames++
        bola.Mover();
    };

    roda();
}; main();