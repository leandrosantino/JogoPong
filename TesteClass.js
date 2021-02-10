class player{
    altura;
    largura;
    x;
    y;
    cor;

    desenhar(){
        console.log(this.altura);
        console.log(this.largura);
        console.log(this.x);
        console.log(this.y);
        console.log(this.cor);
    };
}

let player1 = new player, altura_Janela = 800, largura_Janela = 800;

player1.altura = 70;
player1.largura = 20;
player1.x = largura_Janela - (player1.largura+20/2);
player1.y = altura_Janela/2 - player1.altura/2;


player1.desenhar();