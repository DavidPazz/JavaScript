// DRY não repitar varias vezes

function centralDeAtendimento(opcao) {
    switch(opcao) {
        case 1: console.log('Cobrança')
        break

        case 2: console.log ('Planos')
        break

        case 3: console.log ('Cancelamento')
        break

        case 4: console.log ('Boletos de pagamento')
        break

        case 5:bconsole.log ('Falar com o atemdente')
        break

        case 6: console.log ('Sair')
        break
        
        default: console.log('Opcão no existe')
        break

    }
}

const prompt = require ('prompt-sync') ()
console.log(`
ESCOLHA: (1) para COBRANÇA
         (2) para PLANOS
         (3) para CANCELAMENTO
         (4) para BOLETOS DE PAGAMENTO
         (5) para FALAR COM ATENDENTE
         (6) para SAIR
         `)

let opcao = Number (prompt( ' Escolha uma das opcoes abaixo'))
centralDeAtendimento(opcao)