class CanvasElement{
    type;
    altura;
    largura;
    x;
    y;
    raio;
    cor;
    texto;
    font;
    velx;
    vely;

    Mover;
    FillImg;
    FillLine;

    constructor(type, altura, largura, x, y, cor, raio, velocidade, texto, font){
        this.altura = altura;
        this.largura = largura;
        this.x = x;
        this.y = y;
        this.raio = raio;
        this.cor = cor;
        this.texto = texto;
        this.font = font;
        this.type = type;
        this.velx = velocidade;
        this.vely = velocidade;
    };

    desenha(ctx){
        switch(this.type){
            case 'Retangulo': this.FillRect(ctx);
            break;
            case 'Circulo': this.FillArc(ctx);
            break;
            case 'Text': this.FillText(ctx);
            break;
            case 'Img': this.FillImg(ctx);
            break;
            case 'linha': this.FillLine(ctx);
            break;
            default: console.log('[Erro] Tipo Inválido ou Indefinido');
        };
    };

    FillRect(ctx){
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
    };

    FillArc(ctx){
        ctx.fillStyle=this.cor;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.raio,0,Math.PI*2,true);
        ctx.closePath();
        ctx.fill();
    };

    FillText(ctx){
        ctx.fillStyle = this.cor;
        ctx.font = this.font;
        ctx.fillText(this.texto,this.x, this.y);
    };

};