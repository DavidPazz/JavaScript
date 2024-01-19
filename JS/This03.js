const pessoa = {
    saudacao1: 'Bom dia',
    saudacao2: 'Boa tarde',
    saudacao3: 'Boa noite',
    falar() {
        console.log(this.saudacao1)
    },
}
pessoa.falar( )
const falar = pessoa.falar

falar() // nome dessa situação: CONFLITO ENTRE PARADGIMAS: ESTRUTURA E 0.0
// USE O BIND: qunado tiver paradigimas



//cria uma nova função que , quando chamada, tem sua palavra-chave  THIS definida com o valor  fornecido
const falaPessoa =pessoa.falar.bind(pessoa)
falaPessoa()


function pessoaFunc() {
    this.idade = 0

    setInterval(function () {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) //1 segundo = 1000
}

new pessoaFunc