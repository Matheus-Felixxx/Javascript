function contar(){
    var ini = document.getElementById('inum') 
    var fim = document.getElementById('ifim')
    var pas = document.getElementById('ipass')

    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0)   {
        window.alert('[ERROR] Faltam dados >:(')
    } else{
        window.alert('Tudo certo')
    }
}