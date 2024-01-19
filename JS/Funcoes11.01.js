function soma (a, b) {
    console.log (a * b) // Aqui pode colocar qualquer operação de MATEMATICA
}

soma (2 , 9)
soma ('David ', 'Paz')



function deMaior (idade) {
    if (idade >= 18) {
        console.log('voce é maior de 18')
    } else {
        console.log('voce é menor de idade')
    }
}

const prompt = require ('prompt-sync') ()

let idade = Number (prompt('Informe a idade: '))
deMaior(idade)

idade = Number (prompt('Informe a idade:  '))
deMaior(idade)

module.exports = deMaior