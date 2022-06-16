function insert(num) {
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function Clear() {
    document.getElementById('resultado').innerHTML = '';
}

function back() {
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);

}

function Calcular() {
    let resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else {
        document.getElementById('resultado').innerHTML = 'Sem valor...';
    }
}

function Change() {
    let date = new Date();
    let now = date.getHours();
    let saudation = document.getElementById('saudation');
    var phrase = document.createElement('i');

    if (now >= 5 && now < 12) {
        document.body.style.backgroundImage = 'url(./manha.jpg)';
        let phrase = document.createElement('i');
        phrase.innerHTML = '<i class="fa-solid fa-sun" style="color: orange;"></i> <strong>Bom Dia!</strong>';
        saudation.appendChild(phrase);
    }
    else if (now >= 12 && now <=18) {
        document.body.style.backgroundImage = 'url(./tarde.jpg)';
        phrase.innerHTML = '<i class="fa-solid fa-cloud-sun" style="color: orange;"></i> <strong>Boa Tarde!</strong>';
        saudation.appendChild(phrase);
    }
    else if (now >18 && now <= 23) {
        document.body.style.backgroundImage = 'url(./noite.jpg)';
        phrase.innerHTML = '<i class="fa-solid fa-moon" style="color: orange;"></i> <strong>Boa Noite!</strong>';
        saudation.appendChild(phrase);
    }
    else if (now >= 00 && now < 5) {
        document.body.style.backgroundImage = 'url(./noite.jpg)';
        phrase.innerHTML = '<i class="fa-solid fa-moon" style="color: orange;"></i> <strong>Boa Madrugada!</strong>';
        saudation.appendChild(phrase);
    }
    else {
        document.body.style.backgroundColor = 'red';
        saudation.innerHTML = 'Sem saudações para este horário :(';
    }
}