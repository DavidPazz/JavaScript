/*Crie um codigo que informe o dia da semana atraves de seu numero*/

const prompt = require ('prompt-sync') ()

const numero = Number (prompt ('informe qual o numero deseja informação: '))

/*1 a 7

if (numero == 1) {
    console.log ('domingo')
} else if (numero == 2) {
    console.log ('segunda feira')
}
 else if (numero == 3) {
    console.log ('terça feira')
}
 else if (numero == 4) {
    console.log ('quarta feira')
}
 else if (numero == 5) {
    console.log ('quinta feira')
}
 else if (numero == 6) {
    console.log ('sexta feira')
}
 else if (numero == 7) {
    console.log ('sabado feira')
} else {
    console.log ('seu verme')
}
*/

switch (numero) {
    case 1 :
        console.log('domingo')
        break
    case 2 :
        console.log('segunda')
         break
    case 3 :
        console.log('terça')
         break
    case 4 :
        console.log('quarta')
         break
    case 5 :
        console.log('quinta')
         break
    case 6 :
        console.log('sexta')
         break
    case 7 :
        console.log('sabado')
         break       
}
