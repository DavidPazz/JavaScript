// Diferente do for, cada foreach é cada elemento

const repetentes = ['felipe', 'logam', 'zidany']

repetentes.forEach( function(nome){
    console.log(`Eu ${nome} sou repetente.`)
})

repetentes.  forEach(nome => console.log(`Eu ${nome} inteligente`))


const exibirRepetentes = repetentes => console.log (repetentes)

repetentes.forEach(exibirRepetentes)