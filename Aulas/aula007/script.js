var area = window.document.getElementById('area')
area.addEventListener('click', clicar)
area.addEventListener('mouseenter', entro)
area.addEventListener('mouseout', sair)


function clicar(){
    area.innerText = 'Clicou!'
    area.style.background = 'blue'
}

function entro() {
    area.innerText = 'Entrou!'
     area.style.background = 'purple'
}
function sair(){
    area.innerText = 'Saiu!'
    area.style.background = 'red'
}