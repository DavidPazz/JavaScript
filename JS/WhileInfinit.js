//WHILE INFINITO 

const prompt = require('prompt-sync') ()

/*
let i = 0
while (true) {
    console.log(i)
    i = i+1
}
*/

// Faça um codigo que pergunta se a idade da pessoa caso a pessoa seja menor de idade o sistema é interompido

/*
while(true) {
    const idade = Number(prompt(`informe sua idade`))
    if (idade >= 0 && idade < 18) {
        console.log(`A idade de ${idade} não pode ter a acesso ao sistema `)
        break
    } else {
        console.log(`Olá, seja bem vindo ao nosso sistema`)
    }

}
*/



// crie um codigo que peça as notas dos alunos e quando não houver mais notas para registrar o professor deve informar sair

while(true) {
    const nome = prompt (`informe o nome do aluno`)
    const notas = Number (prompt (`informe a nota do aluno`)) 
    console.log(`o aluno ${nome} ficou a nota ${notas}`)
    const sair = prompt (`digite "Sair" para sair do sistema `)
    if (sair === sair) {
        console.log(`Volte sempre `)
        break
    }
}