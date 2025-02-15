function calc() {
    var regiao = document.querySelector('input#itext');
    var rest = document.querySelector('div#rest');
    var pais = regiao.value;

    rest.innerHTML = `Você está vivendo em ${pais}`;

    if (pais == 'Brasil') { 
        rest.innerHTML += `<p>Você é brasileiro!!!!!!!!</p>`;
    } else {
        rest.innerHTML += `<p>Você é estrangeiro</p>`;
    }
}
