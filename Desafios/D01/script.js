function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()   
    msg.innerHTML = `Agora São ${hora} horas.`
    if(hora >= 0 && hora < 12){
        document.body.style.background = '#80B4BF'
        img.src = 'estilos/pexels-silva-shepa-1605218235-30784285.jpg'
    } else if (hora >= 12 && hora <= 18){
        document.body.style.background = '#F2CB57'
        img.src = 'estilos/pexels-marek-piwnicki-3907296-18688551.jpg'
    } else{
        document.body.style.background = '#012E40'
        img.src = 'estilos/pexels-rpnickson-2885320.jpg'
    }
}