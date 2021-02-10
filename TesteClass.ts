class player{
    public altura = Number; 
    private largura = Number; 
    protected x = Number; 
    y; 
    cor;
    desenhar(){
        console.log(this.altura)
        console.log(this.largura)
        console.log(this.x)
    };
    confg(alt, larg,Ex, Ey, color){
        this.altura = alt;
        this.largura = larg;
        this.x = Ex;
        this.y = Ey;
        this.cor = color;
    };
};

let player1 = new player, 
    player2 = new player,
    altPlayer = 70,
    largPlayer = 20,
    altura_Janela = 800, 
    largura_Janela = 800,
    a = {
        a: 154,
    }
;


player1.confg(
    altPlayer,
    largPlayer,
    largura_Janela - (largPlayer+20/2),
    altura_Janela/2 - altPlayer/2,
    '#000'
);

player2.confg(
    altPlayer,
    largPlayer,
    largura_Janela - (largPlayer+20/2),
    altura_Janela/2 - altPlayer/2,
    '#500'
);

player1.desenhar();
console.log();
player2.desenhar();
console.log();
console.log(player2);
console.log();
console.log(player1);
console.log();


/*
*/

