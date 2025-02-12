function somar() {
    var tn1 =  window.document.getElementById('itext1')
    var tn2 =  window.document.getElementById('itext2')
    var rest = window.document.getElementById('rest')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    rest.innerHTML = `A Soma ente ${n1} e ${n2} e igual a ${s}`
}