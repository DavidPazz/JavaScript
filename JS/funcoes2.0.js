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

