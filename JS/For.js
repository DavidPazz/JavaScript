// faça uma estrutura de repetição que indique qual é o numero maior digitado pelo usuario. Obs:vc dever repetir no maxio 5X

let maior = 0
const prompt = require('prompt-sync') ()
for(i=1; i<= 5; i=i+1) {
    const numero = Number(prompt('informe um numero: '))
    if (maior < numero) {
        maior = numero
    }
}

console.log(`O numero ${maior} é o maior informado.`)