function gerar(){
    var num = document.getElementById('inum')
    var tab = document.getElementById('itabua')
    if(num.value.length == 0){  
         window.alert('[ERROR]Por Favor, digite um numero')
    } else{
       var n = Number(num.value)
       tab.innerHTML = ''
       for(var c = 1; c <= 10 ; c++){
        var item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
       }
    }
}