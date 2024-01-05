const prompt = require('prompt-sync')()

const idade = prompt ('Qual sua idade? ')

if (idade >= 18 && idade < 60 ){
    console.log ('Você é maior de idade')
} else if (idade > 0 && idade < 12){
    console.log ('Você é criança')
} else if (idade >= 12 && idade <= 17){
    console.log ('Você é adolecente')
} else if (idade >= 60 ) {
    console.log ('Você é idoso')
} else {
    console.log ('impossivel identifica sua raça humana seu verme miséravel')
}
