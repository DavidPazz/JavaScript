//if ternario


/* let meuBoleano = true 
meuBoleano ? console.log ('é verdade') : console.log('é false') */

/*let vendas = 3000

if (vendas >= 2500) {
    console.log ('parabens vc vai receber sua gratificão')
} else {
    console.log ('que triste vc não ganhou')
} */


/* let vendas = 2500
const gratificacao = vendas >= 2500 ? 'vc ganhou' : 'vc nao ganhou'
console.log (gratificacao) */

//let nota = 5.5
//const resultado = nota >= 7.0 ? 'aprovado' : nota < 5.0 ? 'reprovado' : 'recuperação'
//console.log(resultado)

const prompt = require ('prompt-sync') ()

const nome = prompt ('informe seu nome: ').
toLowerCase()

const funcao = nome === 'david' ? 'aluno' : nome === 'biel' ? 'aluno' : nome === 'jp' ? 'aluno' : 'nao identificado'

console.log (funcao)