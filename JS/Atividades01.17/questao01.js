/*1. Data com mês por extenso. Construa uma função que receba uma data no formato DD/MM/AAAA e devolva uma string no formato Dia de mesPorExtenso de Ano. Opcionalmente, valide a data e retorne NULL caso a data seja inválida.
 */


const prompt = require('prompt-sync') ()
let data = prompt('digite a data desejada. EX:DD/MM/AAAA: ')
let arraydata = data.split('/')

console.log(data)