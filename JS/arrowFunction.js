// função literal anonima

let dobro = function(a) {
    return 2 * a
}

console.log (dobro(8))


// arrow funtcion padrao

dobro = (a) => {
    return 2 * a
}

console.log (dobro (600))

// arrowFuntcion com return implicito
//dobro = a => 2 * a console.log (dobro (Math.PI))

let ola = function() { //funcao anonima
    return 'ola'

}
ola = () => { // forma padrao
    return 'ola'
}

ola = ( ) => 'ola' //forms de return implicito

ola = _ = 'ola'

console.log (ola)


// Atividade - Funções
// 01. crie um codigo que leia um arrayde 12 elementos e mostre-os

let listaDavid = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 1,2,3,4,5,6] 
function mostrar(umaLista) {
    for ( let i = 0; i < listaDavid.length; i++ ) {
        console.log (listaDavid[i])
    }
    }
mostrar (listaDavid)

