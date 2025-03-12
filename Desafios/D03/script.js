function contar(){
    var ini = document.getElementById('inum') 
    var fim = document.getElementById('ifim')
    var pas = document.getElementById('ipass')
    var res = document.getElementById('rest')

    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0)   {
        res.innerHTML = 'Impossivel contar!'
        //window.alert('[ERROR] Faltam dados >:(')
        
    } else{
       res.innerHTML = 'Contando: <br> '
       var i = Number(ini.value)
       var f = Number(fim.value)
       var p = Number(pas.value)
       if(p <= 0){
        window.alert('Passo Inválido! considerando PASSO 1')
        p = 1 
       }
       // Contagem crescente
        if(i < f){
       for(var c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F449} `
       }
       res.innerHTML += `\u{1F6A9}`
       //contagem regressiva
    } else{
        for(let c = i; c >= f; c -= p){
            res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F6A9}`
    }
    }
}