main();
setStatus('inicio');

//Insere o Painel e Opções
let painel = document.createElement('div');
painel.setAttribute('class', 'confg');
painel.innerHTML = ''+
    '<input type="button" value="Jogar" id="jogar">'+
    '<input type="button" value="Pause" id="pause">'+
    '<input type="button" value="Restart" id="restart">'
;
document.body.appendChild(painel);

let play = document.getElementById('jogar'),
    pause = document.getElementById('pause'), 
    reset = document.getElementById('restart')
;
pause.setAttribute('style', 'display: none');

window.addEventListener('keypress', (event)=>{
    if(event.key === ' '){
        painel.style.display = 'unset';
        setStatus('pause');

    };
    
});

play.addEventListener('click', ()=>{
    painel.style.display = 'none';
    setTimeout(() => {
       setStatus('jogando'); 
    }, 1000);
});
reset.addEventListener('click', ()=>{
    painel.style.display = 'none';
    restart();
});


//pause.addEventListener('click', ()=>{});
//painel.style.display = 'none';

