/*
// cria uma função de forma literal
function func01 () {return 'função1' }

//armazenar uma função de uma varieavel

const func02 = function () {return 'função2'}

// armazenar uma função em um array

const meuArray = [ function(a, b) { return a + b}, func01,func02]

console.log(meuArray[0](4,7))

  
// armazerna uma função em atributo de objeto
const obj ={}
obj.falar = function( ) {return 'opa, to on'}
console.log(obj.falar())

// função com parametro de uma função

//obs : funçoes anonimas sao usadas 1vez para a função

function qualquercoisa (eita) {
    eita()
}

qualquercoisa(function() {console.log('executando..... ')})


//

function calculaSalario (funcoes, valor) {
    funcoes(valor)
}

calculaSalario(function(valor) {
    let imposto = valor * 0.03
    let valorComImposto = valor - imposto 
    console.log (valorComImposto)
}, 1000)

calculaSalario(function(valor) {
    let imposto = valor * 0.05
    let valorComImposto = valor - imposto 
    console.log (valorComImposto)
}, 3000)

//

function valores (a, b, c, d, e, f ) {
    console.log(a + b)
    console.log(c - d)
    console.log(e * f)
}

valores(10, 29, 89, 5, 10, 89)

*/

// Retornos são opcionais

/*
function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log (´Valor acima do permitido:  ${area}m2´)
    } else {
        return area
    }
}

console.log (area(2,2))
console.log (area(2))
console.log (area())

console.log (chegou ate aqui)

*/

//parametros variaveis nas funçoes JS
//arguments é uma lista criada automaticamente com os valores passados para uma função sem parametros

/* function soma(){
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return {soma, arguments}
}

console.log(soma())
console.log (soma(10, 25))
console.log (soma(10, 25,10, 100))
console.log (soma('david ','paz'))
*/


//funçoes com parametros e com valores padroes

function multiplicacao(a, b, c) {
    a = a
    b = b
    c = c
    return a * b * c
}

console.log(multiplicacao(2, 5, 9))

// valor padrão de Es2015


function multiplicacao2015(a=1, b=5, c=8) {
    return a * b * c
}

console.log(multiplicacao2015())
console.log(multiplicacao2015(2))
console.log(multiplicacao2015(4, 6))
console.log(multiplicacao2015(5, 5, 10))