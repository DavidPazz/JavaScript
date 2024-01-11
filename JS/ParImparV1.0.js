// crie um codigo que que solicite 10 numero para o usuario e ao final informe quantos foram pares e quantos foram impares

const prompt = require ('prompt-sync') ()

let NumPares = 0
let NumImpares = 0

for (i = 0; i <= 10; i++) {
    const numero = Number  (prompt(`Informe seu numero`))
    if (numero % 2 === 0) {
        Numpares++
    }else {
        NumImpares++
    }
}

console.log (` Vc digitou ${NumPares} Numero PAR e ${NumImpares} e Numero impar`)


