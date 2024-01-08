/* Crieum codigo em Javascript que informe
 qual o tipo de dado o usuario digitou 
 
 Tipos de dados:  String, Number, Boolean*/


const prompt = require('prompt-sync')()

const digitou = prompt ('Insira seu Dado: ')

if (digitou == 'true' || digitou == 'false') {
    console.log(typeof(boolean(digitou)))
} else if (isNaN(digitou)) {
    console.log (typeof(digitou))
} else if (!isNaN (digitou)) {
    console.log (typeof(Number(digitou)))
} else {
    console.log ('impossivel de identificar')
}
