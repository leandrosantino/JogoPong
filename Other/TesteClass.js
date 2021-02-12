class player{
    altura; largura; x; y; cor; nome; mover;

    constructor(nome, altura, largura, Ex, Ey, color){
        this.altura = altura;
        this.largura = largura;
        this.x = Ex;
        this.y = Ey;
        this.cor = color;
        this.nome = nome
    };

    desenhar(){
        console.log(this.nome);
        console.log(this.altura);
        console.log(this.largura);
        console.log(this.x);
        console.log(this.y);
        console.log(this.cor);
    };

};

let player1 = new player('P1',70,20,10,360,"#000"),
    player2 = new player('P2',70,20,760,360,"#000"),
    altPlayer = 70,
    largPlayer = 20,
    altura_Janela = 800, 
    largura_Janela = 800
;

player1.mover = ()=>{
    console.log('Sucesso');
};

player1.desenhar();
console.log();
player2.desenhar();
console.log();
player1.mover();




/*
*/

