const prompt = require ('prompt-sync') ()
let maior = 0
let i = 1 //INICIADOR
while( i <= 5) { //CONDICIONADOR
    const numero = Number(prompt('informe um numero: '))
    if (maior < numero) {
        maior > numero
    }
    i = i +1 // INCREMENTADOR
}

console.log(`O numero ${maior} `)