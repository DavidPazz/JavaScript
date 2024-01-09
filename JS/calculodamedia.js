/* Fazer uma estrutura que calcule a media das 3 notas do aluno e informese o mesmo, passou de ano ou vai repetir

Nota1, Nota2 , Nota3

media é 7

*/

const prompt = require('prompt-sync') ()
const nota1 = prompt ('informe a primeira nota:')
const nota2 = prompt ('informe a segunda nota: ')
const nota3 = prompt ('informe a terceira nota: ')

const media = (nota1 + nota2 + nota3) / 3
    console.log (media)
if (media >= 7) {
    console.log ('parabens vc foi aprovado')
} else {
    console.log ('vc esta reprovado')
}