/* Crieum codigo em Javascript que informe
 qual o tipo de dado o usuario digitou 
 
 Tipos de dados:  String, Number, Boolean*/


const prompt = require('prompt-sync')()

const dado = prompt ('Insira seu Dado')

if (dado === 'true' || dado === 'false') {
    connsole.log ('seu valor é boolean')
} else if (number(dado)) {
    console.log ('seu valor e number')
} else if (typeof dado === 'string') {
    console.log ('seu valor é string')
}