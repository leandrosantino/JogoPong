//Determina o Tamanho da Tela
let windowWidth = window.innerWidth,
    windowHeight = window.innerHeight;
if(windowWidth >= 800){
    windowWidth = 800;
    windowHeight = 600;
};
//Declara todas a Variaveis Necessárias
let canvas = document.getElementById('canvas'),
    frames = 0,
    font = 'normal 20pt arial', 
    status = 'jogando',
    speepPlayer,
    speedGame = 3,
    backgrond = new CanvasElement('Retangulo', windowHeight, windowWidth, 0, 0, '#000'),
    player1 = new CanvasElement('Retangulo', 70, 20, 100, 100, '#ffff'),
    player2 = new CanvasElement('Retangulo', 70, 20, 200, 100, '#ffff'),
    bola = new CanvasElement('Circulo', 0, 0, 100, 100, '#ffff', 10, speedGame),
    pontosP1 = new CanvasElement('Text', 0, 0, 100, 100, 'ffff',0,0, 'P1', font),
    pontosP2 = new CanvasElement('Text', 0, 0, 200, 200, 'ffff',0,0, 'P2', font)

;

bola.Mover = function(){

    bola.x += bola.velx;
    bola.y += bola.vely;

    let bolacolid_D = bola.x + bola.raio+3,
        bolacolid_E = bola.x - bola.raio-3,
        bolacolid_C = bola.y - bola.raio-3,
        bolacolid_B = bola.y + bola.raio+3
    ;


    if(bolacolid_D > windowWidth || bolacolid_E < 0){
        bola.velx = -bola.velx;
    };
   
    if(bolacolid_C < 0 || bolacolid_B > windowHeight){
        bola.vely = -bola.vely;
    };


    
};

function main(){
    canvas.width = windowWidth;
    canvas.height = windowHeight;
    canvas = canvas.getContext('2d');

    roda();
};

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
    pontosP1.desenha(canvas);
    pontosP2.desenha(canvas);
    
};
//Atualiza os quadros do jogo
function atualisa(){
   frames++
    bola.Mover();
};

//Inicializa o jogo
main();