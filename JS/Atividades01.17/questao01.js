const prompt = require('prompt-sync') ()
let data = prompt('digite a data desejada. EX:DD/MM/AAAA: ')
let arraydata = data.split('/')

console.log(data)