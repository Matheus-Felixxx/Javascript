

function calcular(){
    var txtv = window.document.getElementById('ivel')
    var rest = window.document.querySelector('div#rest')
    var vel = Number(txtv.value)
    rest.innerHTML = `Sua velocidade atual é de ${vel} Km/h`
    if (vel > 60){
        rest.innerHTML += `<p>Você está MULTADO por excesso de velocidade</p>`
    }
    rest.innerHTML += `<p>Dirija sempre com cinto de segurança</p>`
}