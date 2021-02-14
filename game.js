
//Jogo Pong 2.0 
//By Leandro Santinio 2021

//Declara todas a variaveis necessárias
let windowWidth = window.innerWidth,
    windowHeight = window.innerHeight,
    frames = 0,
    gameover = 10,
    font = 'normal 30pt arial', 
    status = 'jogand',
    speedPlayer = 19,
    widthPlayer = 80,
    heightPlayer = 20,
    speedGame = 3.5,
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
    player1 = new CanvasElement('Retangulo', widthPlayer, heightPlayer, 0, 100, '#00BFFF'),
    player2 = new CanvasElement('Retangulo', widthPlayer, heightPlayer, 0, 100, '#FF8C00'),
    bola = new CanvasElement('Circulo', 0, 0, 100, 100, "#ffffff", 10, speedGame),
    placarP1 = new CanvasElement('Text', 0, 0, 100, 100, '#00BFFF',0,0, `${pontosP1}`, font),
    placarP2 = new CanvasElement('Text', 0, 0, 200, 200, '#FF8C00',0,0, `${pontosP2}`, font),
    linha = new CanvasElement('Retangulo', windowHeight, 2, windowWidth/2-1, 0, '#ffff'),
    c1 = new CanvasElement('Circulo', 0, 0, windowWidth/2, windowHeight/2, '#ffffff', 40),
    c2 = new CanvasElement('Circulo', 0, 0, windowWidth/2, windowHeight/2, '#000000', 38)    
;

bola.Mover = ()=>{

    bola.x += bola.velx;
    bola.y += bola.vely;

    let bolacolid_D = bola.x + bola.raio+3,
        bolacolid_E = bola.x - bola.raio-3,
        bolacolid_C = bola.y - bola.raio,
        bolacolid_B = bola.y + bola.raio,
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
        setStatus('pause');
        placarP1.texto = `${pontosP1+=1}`;
        let time  = setTimeout(() => {
           clearTimeout(time);
           bola.x = windowWidth/2 - 330;
           bola.y = windowHeight/2;
           player1.y = windowHeight/2 - player1.altura/2;
           player2.y = windowHeight/2 - player2.altura/2;
           player2.x = windowWidth-player2.largura;
           gameOver();    
        }, 1500);  
            
        
    }else if(bolacolid_E < 0){
        setStatus('pause');
        placarP2.texto = `${pontosP2+=1}`;
        let time  = setTimeout(() => {
            clearTimeout(time);
            bola.x = windowWidth/2 + 330;
            bola.y = windowHeight/2;
            player1.y = windowHeight/2 - player1.altura/2;
            player2.y = windowHeight/2 - player2.altura/2;
            player2.x = windowWidth-player2.largura;
            gameOver();    
         }, 1500);  
    }
    
};

//Move os jogadores
window.addEventListener('keyup' , moverPlayer);
window.addEventListener('keydown' , moverPlayer);
function moverPlayer(event){
   let tecla = event.key;
    switch(tecla){
        case 'w': if(player1.y > 0){player1.y -= speedPlayer}; break;
        case 's': if(player1.y+player1.altura < windowHeight){player1.y += speedPlayer}; break;
        case 'e': if(bola.x == windowWidth/2 - 330 && bola.y == windowHeight/2){setStatus('jogando')}; break;
        case '8': if(player2.y > 0){player2.y -= speedPlayer}; break;
        case '2': if(player2.y+player2.altura < windowHeight){player2.y += speedPlayer}; break;
        case '4': if(bola.x == windowWidth/2 + 330 && bola.y == windowHeight/2){setStatus('jogando')}; break;
    };  
};

function restart(){
    status = 'Pause'
    pontosP1 = 0;
    pontosP2 = 0;
    placarP1.texto = `${pontosP1}`;
    placarP2.texto = `${pontosP2}`;
    bola.x = windowWidth/2 - 330;
    bola.y = windowHeight/2;
};

function gameOver(){
    if(pontosP1 == gameover){
        status = 'Pause'
        placarP1.texto = 'You Win'
        restart();

    }else if(pontosP2 == gameover){
        status = 'Pause'
        placarP2.texto = 'You Win'
        restart();

    };
};

function setStatus(cmd){status = cmd;};

//Inicializa o jogo
function main(){
    canvas.width = windowWidth;
    canvas.height = windowHeight;
    canvas = canvas.getContext('2d');222

    bola.x = windowWidth/2 - 330;
    bola.y = windowHeight/2;
    player1.y = windowHeight/2 - player1.altura/2;
    player2.y = windowHeight/2 - player2.altura/2;
    player2.x = windowWidth-player2.largura;
    placarP1.y = 40;
    placarP2.y = 40;
    placarP2.x = linha.x+1 + 40;
    placarP1.x = linha.x-1 - 20 - 40;

    //Desenha os CanvasElements
    function desenha(){
        backgrond.desenha(canvas);
        
        placarP1.desenha(canvas);
        placarP2.desenha(canvas);
        c1.desenha(canvas);
        c2.desenha(canvas);
        linha.desenha(canvas);
        player1.desenha(canvas);
        player2.desenha(canvas);
        bola.desenha(canvas);
        
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



