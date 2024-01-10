// crie um codigo com as principais funcionalidade do menu inicial de um game
// New game , Load game , Settings , Quit

const prompt = require ('prompt-sync') ()

const tatudajamaica = Number ( prompt ('Escolha: 1(New game), 2(Load game), 3(settings), 4 (quit) '))

switch (tatudajamaica) {
    case 1 :
        console.log('Começa um novo gamer?')
        break
    case 2 :
     console.log('carregar o gamer')
        break
    case 3:
        console.log('Abrindo configurações')
        break
    case 4:
        console.log('Saindo do jogo')
        break
}