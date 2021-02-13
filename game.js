
//Jogo Pong 2.0 
//By Leandro Santinio 2021

//Declara todas a variaveis necessárias
let windowWidth = window.innerWidth,
    windowHeight = window.innerHeight,
    frames = 0,
    gameover = 4,
    font = 'normal 20pt arial', 
    status = 'inicio',
    speedPlayer = 20,
    widthPlayer = 70,
    heightPlayer = 20,
    speedGame = 3,
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
    player1 = new CanvasElement('Retangulo', widthPlayer, heightPlayer, 10, 100, '#00BFFF'),
    player2 = new CanvasElement('Retangulo', widthPlayer, heightPlayer, 10, 100, '#FF8C00'),
    bola = new CanvasElement('Circulo', 0, 0, 100, 100, "#ffffff", 10, speedGame),
    placarP1 = new CanvasElement('Text', 0, 0, 100, 100, '#00BFFF',0,0, `${pontosP1} - Player I`, font),
    placarP2 = new CanvasElement('Text', 0, 0, 200, 200, '#FF8C00',0,0, `Player II - ${pontosP1}`, font),
    linha = new CanvasElement('Retangulo', windowHeight, 2, windowWidth/2-1, 0, '#ffff')    
;

bola.Mover = ()=>{

    bola.x += bola.velx;
    bola.y += bola.vely;

    let bolacolid_D = bola.x + bola.raio+3,
        bolacolid_E = bola.x - bola.raio-3,
        bolacolid_C = bola.y - bola.raio-3,
        bolacolid_B = bola.y + bola.raio+3,
        player1colid_C = player1.y ,
        player1colid_B = player1.y+player1.altura , 
        player1colid_F = player1.x+player1.largura ,
        player2colid_C = player2.y ,
        player2colid_B = player2.y+player2.altura , 
        player2colid_F = player2.x 
    ;

    if(bolacolid_D > player2colid_F &&
       bolacolid_B-3 > player2colid_C && 
       bolacolid_C+3 < player2colid_B){

        bola.velx = -bola.velx;

    }else 
    if(bolacolid_E < player1colid_F &&
       bolacolid_B-3 > player1colid_C && 
       bolacolid_C+3 < player1colid_B){

        bola.velx = -bola.velx;

    }else if(bolacolid_C < 0 || bolacolid_B > windowHeight){
        bola.vely = -bola.vely;
    };

    if(bolacolid_D > windowWidth){       
        placarP1.texto = `Player I - ${pontosP1+=1}`
        gameOver();
    }else if(bolacolid_E < 0){
        placarP2.texto = `Player II - ${pontosP2+=1}`
        gameOver();
    }
    
};

//Move os jogadores
window.addEventListener('keypress' , (event)=>{
   let tecla = event.key;
    switch(tecla){
        case 'w': if(player1.y > 0){player1.y -= speedPlayer}; break;
        case 's': if(player1.y+player1.altura < windowHeight){player1.y += speedPlayer}; break;
        case '8': if(player2.y > 0){player2.y -= speedPlayer}; break;
        case '2': if(player2.y+player2.altura < windowHeight){player2.y += speedPlayer}; break;
    };  
});

function restart(){
    status = 'Pause'
    pontosP1 = 0;
    pontosP2 = 0;
    placarP1.texto = `${pontosP1} - Player I`;
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

function setStatus(cmd){status = cmd;};

//Inicializa o jogo
function main(){
    canvas.width = windowWidth;
    canvas.height = windowHeight;
    canvas = canvas.getContext('2d');222

    bola.x = windowWidth/2;
    bola.y = windowHeight/2;
    player1.y = windowHeight/2 - player1.altura/2;
    player2.y = windowHeight/2 - player2.altura/2;
    player2.x = windowWidth-player2.largura - 10;
    placarP1.y = 40;
    placarP2.y = 40;
    placarP2.x = linha.x+1 + 40;
    placarP1.x = linha.x-1 - 126 - 40;

    //Desenha os CanvasElements
    function desenha(){
        backgrond.desenha(canvas);
        linha.desenha(canvas);
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

    //Loop do Jogo
    function roda(){
        if(status == 'jogando'){
            atualisa();
        };
        desenha();
        window.requestAnimationFrame(roda);
    };

    roda();
};