/*1. Data com mês por extenso. Construa uma função que receba uma data no formato DD/MM/AAAA e devolva uma string no formato Dia de mesPorExtenso de Ano. Opcionalmente, valide a data e retorne NULL caso a data seja inválida.
 */

const prompt = require('prompt-sync') ()

function data(DD, MM, AAAA) {
    if (DD > 31) {
        return null
    } else if (DD < 0){
        return null
    }
    if (MM > 12) {
        return null
    } else if (MM < 0) {
        return null
    }
    
    AAAA = AAAA

    switch (MM) {
        case 1:
            return  `${DD} de Janeiro de ${AAAA}`
        case 2:
            return `${DD} de Fevereiro de ${AAAA}`
        case 3:
            return `${DD} de Março de ${AAAA}`
        case 4:
            return `${DD} de Abril de ${AAAA}`
        case 5:
            return `${DD} de Maio de ${AAAA}`
        case 6:
            return `${DD} de Junho de ${AAAA}`
        case 7:
            return `${DD} de Julho de ${AAAA}`
        case 8:
            return `${DD} de Agosto de ${AAAA}`
        case 9:
            return `${DD} de Setembro de ${AAAA}`
        case 10:
            return `${DD} de Outubro de ${AAAA}`
        case 11:
            return `${DD} de Novembro de ${AAAA}`
        case 12:
            return `${DD} de Dezembro de ${AAAA}`
    }
}

console.log(data(21, 5, 2006)); //Ex: Data

