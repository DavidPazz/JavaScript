/* O que são estruturas de objetos no JS?

    Parametro: {}
    estrutura do objeto: chave: valor,

*/

let meuObjeto = {
    Nome: 'David',
    Sobrenome: 'Paz',
    Idade: 18,
    Profissao: 'Dev Front-End'
}
console.table(meuObjeto)
console.log(meuObjeto) // imprime o objeto completo
console.log(Object.values(meuObjeto)) // imprime os valores do objeto
console.log(Object.keys(meuObjeto)) // imprime as chaves do objeto

delete meuObjeto.Profissao
console.log(meuObjeto)


meuObjeto['Profissao'] = 'Super Mega Master Senior Ultra Giga Tom Dev Full Meta Stack' //adiciona elementos e no inicio
console.log(meuObjeto)

