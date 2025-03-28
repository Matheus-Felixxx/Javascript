var num = document.getElementById('inum');
var lista = document.getElementById('filista');
var res = document.getElementById('res');
var vetor = [];

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(n, lista) {
    if (lista.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function add() {
    if (isNumero(num.value) && !inLista(num.value, vetor)) {
        vetor.push(Number(num.value));
        var item = document.createElement('option');
        item.text = `O número ${num.value} foi adicionado à lista.`;
        lista.appendChild(item);
        res.innerHTML = '';
    } else {
        window.alert('[ERROR] Valor inválido ou já encontrado na lista');
    }
    num.value = '';
    num.focus();
}

function fim() {
    if (vetor.length == 0) {
        window.alert('[ERROR] Adicione valores antes de finalizar');
    } else {
        var tot = vetor.length;
        var maior = vetor[0];
        var menor = vetor[0];
        var somar = 0
        var media = 0

        for (var pos in vetor) {
            somar += vetor[pos]
            if (vetor[pos] > maior) {
                maior = vetor[pos];
            }
            if (vetor[pos] < menor) {
                menor = vetor[pos];
            }
        }
        media = somar / tot
        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior número registrado foi ${maior}.</p>`;
        res.innerHTML += `<p>O menor número registrado foi ${menor}.</p>`;
        res.innerHTML += `<p>A soma de todos os valores e igual é ${somar}</p>`
        res.innerHTML += `<p>A média desses valores é igual a ${media} `
    }
}
