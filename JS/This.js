// This - é uma palavra reservada que faz referencia ao PAI de um elemento. quando o THIS é utilizado fora de uma função ou objeto, seu PAI será o elemento do contexto GLOBAL.

function aluno(nomeAluno, notaAluno) {
    this.nomeAluno = nomeAluno
    this.notaAluno = notaAluno
    
    notaAluno = notaAluno * 3
    this.notaAluno = this.notaAluno * 7

    console.log(this.nomeAluno)
    console.log(this.notaAluno)
    console.log(notaAluno)

    this.dadosAnonimos = function () {
        setTimeout(function (){
            console.log(this.nomeAluno)
            console.log(this.notaAluno)
        }, 3000)
    }
}
const aluno1 = new aluno ('biel', 9.0)
aluno1.dadosAnonimos()

