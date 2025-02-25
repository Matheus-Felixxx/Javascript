function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('iano');
    var rest = document.getElementById('rest');
    
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERROR] Verifique os dados e tente novamente');
    } else {
        var idade = ano - Number(fano.value);
        var fsex = document.getElementsByName('gen');
        var gênero = '';
        var img = document.createElement('img')
        img.setAttribute('id', 'img')

        if (fsex[0].checked) {
            gênero = 'Mulher';
            if(idade >= 0 && idade < 10 ){
                //criança
                img.setAttribute('src', 'estilos/pexels-hassan-mukhtar-2149856417-30883927.jpg')
            } else if (idade >= 10 && idade < 21){
                //jovem
                img.setAttribute('src', 'estilos/pexels-anastasiya-gepp-654466-1462630.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'estilos/pexels-olly-774909.jpg')
            } else{
                //idoso
                img.setAttribute('src', 'estilos/pexels-nashua-volquez-young-452210-1729931.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Homem';
            if(idade >= 0 && idade < 10 ){
                //criança
                img.setAttribute('src', 'estilos/pexels-bess-hamiti-83687-35537.jpg')
            } else if (idade >= 10 && idade < 21){
                //jovem
                img.setAttribute('src', 'estilos/pexels-sebastiaan9977-1304647.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'estilos/pexels-italo-melo-881954-2379004.jpg')
            } else{
                //idoso
                img.setAttribute('src', 'estilos/pexels-thgusstavo-2774292.jpg')
            }
        } else if (fsex[2]){
            gênero = 'gustavo arlindo'
            if(idade >= 0 && idade < 10 ){
                //criança
                img.setAttribute('src', 'estilos/046d6ad6-a4d2-42cb-a5d8-c28f3878197b.jpeg')
            } else if (idade >= 10 && idade < 21){
                //jovem
                img.setAttribute('src', 'estilos/046d6ad6-a4d2-42cb-a5d8-c28f3878197b.jpeg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'estilos/046d6ad6-a4d2-42cb-a5d8-c28f3878197b.jpeg')
            } else{
                //idoso
                img.setAttribute('src', 'estilos/046d6ad6-a4d2-42cb-a5d8-c28f3878197b.jpeg')
            }
        }

        rest.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
        rest.appendChild(img)
    }
}
