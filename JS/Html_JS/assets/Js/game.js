let altura = 0
let largura = 0
let numVida = 1
let tempo = 15

function tamanhoDoPalco() {
    altura = window.innerHeight
    largura = window.innerWidth

    //console.log(altura, largura)
}

tamanhoDoPalco()

let cronometro =  setInterval(function(){
    tempo -= 1
    if (tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'game_win.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function imgRandomica(){

    //REMOVE MOSQUITO   
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if (numVida > 3) {
            window.location.href = 'game_over.html'
        }else  {
            document.getElementById('vida' + numVida ).src = images/coracao_vazio.png
            numVida++
        }
    }

    let posicaoX = Math.floor (Math.random() * largura) -90
    let posicaoY = Math.floor (Math.random() * altura) - 90

    //console.log(posicaoX, posicaoY)

    posicaoX = posicaoY < 0 ? 0 : posicaoX
    posicaoY = posicaoX < 0 ? 0 : posicaoY

    let mosquito = document.createElement('img')
    mosquito.src = "images/mosca.png"
    mosquito.ClassName = tamanhoDoPalco() + ' ' + ladoAleatorio() 

    // Random da posição
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position =  'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick =  function() {
        this.remove()
    }


    document.body.appendChild(mosquito)
}

function tamanhoRandomico() {
    let classe = Math.floor (Math.random() * 3)

    switch(classe) {
        case 0: return 'mosquito1'
        case 1: return 'mosquito2'
        case 2: return 'mosquito3'
    }
}

function ladoAleatorio() {
    let classe = Math.floor (Math.random() * 2)

    switch(classe) {
        case 0: return 'ladoA'
        case 1: return 'ladoB'
    }

}