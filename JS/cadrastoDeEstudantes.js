// Crie um codigo que implemente um cadrasto de estudante utilizando objetos.
const prompt = require('prompt-sync') ()

let cadObjeto = {}

while(true) {
    const nomeEstudante = prompt('Informe o nome do estudante: ')
    estudante.nomeEstudante = nomeEstudante
    console.log(estudante.nomeEstudante)

    const sobreNome = prompt('Informe o Sobrenome do estudante: ')
    estudante.sobreNome = sobreNome
    console.log(estudante.sobreNome)

    const idade = Number (prompt('Informe a idade do estudante: '))
    estudante.idade = idade
    console.log(estudante.idade)

    const turma = prompt('Informe a turma do estudante: ')
    estudante.turma = turma
    console.log(estudante.turma)

    const serie = Number (prompt('Informe a serie do estudante: '))
    estudante.serie = serie
    console.log(estudante.serie)

    const turno = prompt('Informe a turma do estudante: ')
    estudante.turno = turno
    console.log(estudante.turno)

    const saida = prompt('Digite S para SAIR:  ')
    if(saida.toLocaleLowerCase() === 's') {
        console.log('Fim do cadrasto')
        break
    }

}

console.table(estudante)