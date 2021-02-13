main();

//Insere o Painel e Opções
let painel = document.createElement('div');
painel.setAttribute('class', 'confg');
painel.innerHTML = ''+
    '<input type="button" value="|>">'+
    '<input type="button" value="||">'+
    '<input type="button" value="Restart">'
;
document.body.appendChild(painel);

painel.style.display = 'none';

