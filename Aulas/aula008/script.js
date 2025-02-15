function somar() {
    var tn1 =  window.document.getElementById('itext1')
    var tn2 =  window.document.getElementById('itext2')
    var rest = window.document.getElementById('rest')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    rest.innerHTML = `A Soma ente ${n1} e ${n2} e igual a ${s}`
}

function multi() {
    var tn3 =  window.document.getElementById('itext3')
    var tn4 =  window.document.getElementById('itext4')
    var rest = window.document.getElementById('rest')
    var n3 = Number(tn3.value)
    var n4 = Number(tn4.value)
    var m = n3 * n4
    restu.innerHTML = `A Multiplicação ente ${n3} e ${n4} e igual a ${m}`
}

function divi() {
    var tn5 =  window.document.getElementById('itext5')
    var tn6 =  window.document.getElementById('itext6')
    var divi = window.document.getElementById('divi')
    var n5 = Number(tn5.value)
    var n6 = Number(tn6.value)
    var d = n5 / n6
    divi.innerHTML = `A divisão ente ${n5} e ${n6} e igual a ${d}`
    
}

function sub() {
    var tn7 =  window.document.getElementById('itext7')
    var tn8 =  window.document.getElementById('itext8')
    var subt = window.document.getElementById('subt')
    var n7 = Number(tn7.value)
    var n8 = Number(tn8.value)
    var sb = n7 - n8
    subt.innerHTML = `A Subtração ente ${n7} e ${n8} e igual a ${sb}`
    
}

function pont() {
    var tn9 =  window.document.getElementById('itext9')
    var tn10 =  window.document.getElementById('itext10')
    var pont = window.document.getElementById('pont')
    var n9 = Number(tn9.value)
    var n10 = Number(tn10.value)
    var p = n9 ** n10
    pont.innerHTML = `A potencia ente ${n9} e ${n10} e igual a ${p}`
    
}