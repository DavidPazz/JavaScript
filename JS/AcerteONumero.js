//crie um game para o usuario ficar tentando acertar o numero oculto, quando ele acertar o game deve finalizar e informar a quantidade de tentativa.

//QUEM TEM DIFICUDADE COM INTEPRETAÇÃO
// 1° DETECTEI QUE É UMA REPETIÇÃO
// 2° USAR WHILE POIS NÃOO SABEMOS QUANTAS VEZES IREMOS REPETIR
// 3° VOU PRECISAR DO MEU PROMPT
// 4° PRECISO DE UM VALOR PADRÃO PARA O NUMERO OCULTO
// 5° WHILE INFINITO 
// 6° PRECISO DE UM VALOR ARMAZENAR A QUANTIDADE DE TENTATIVAS 


const prompt = require('prompt-sync') ()

const numeroOculto = 767
let QdeTentativas = 0
while (true) {
    const numero = Number(prompt(`Informe o numero: `))
    QdeTentativas = QdeTentativas + 1
    if (numeroOculto === numero) {
        console.log (`Parabens voce acertou e teve ${QdeTentativas} Tentativa(s)`)
        break
    }
    if (numeroOculto > numero) {
        console.log (`O seu ${numero} é MENOR que o numero oculto`)
    } else { (numeroOculto < numero)
        console.log (`O seu ${numero} é MAIOR que o numero oculto`)
    }

}
