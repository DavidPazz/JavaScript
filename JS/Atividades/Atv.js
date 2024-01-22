//Faça um algoritmo que calcule o fatorial de um numero. Use ArrowFunction

const prompt = require ('prompt-sync') ()

/*
const calculoFatorial =(n) => {
    let resultado = 1

    for (let i=1; i <= n; i++ ) {
        resultado *=1

        return resultado
    }
}

const numero = Number (prompt('informe um numero: '))
const resultdoFinal = calculoFatorial(numero)
console.log(`O fatorial de ${numero} é ${resultdoFinal}`) */


// Crie um codigo que informe qunatas e quais cedulas são necesaárias para entregar um valor determinado.
//Cedulas: 2,5,10,20,50,100 e 200

const cedulaSla = (valor) => {
    let cedulas = [2,5,10,20,50,100,200]

    let resultado1 = {}

    cedulas.forEach((cedula)) => {
        const qtd = Math.floor(valor / cedula)

        if (qtd > 0) {
            resultdo1 [cedula] = qtd
            valor %= cedula
        }
    }
    return resultado1
}

const sacar = Number(prompt('Informe o valor a ser sacado: '))
const cedulasNecessarias = cedulaSla(sacar)

for (const cedula in cedulasNecessarias){
    console.log(cedulasNecessarias[cedula])
}