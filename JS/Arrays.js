const lista1 = ['a', 'b', 'c', 'd', 'e']
//idices         0    1    2    3    4

let lista2 = [1, 2, 3, 4, 5]
//idices      0  1  2  3  4


console.log(typeof (lista1))
console.log(lista1.length)

/*for (i=0; i < lista1.length; i++){
    console.log ('lista1'[i])
}*/

let lista3 = lista1
console.log (lista3)

lista3.push('f') //adiciona no final
lista3.pop('g') //remove no final

lista1.unshift('z')//adiciona no inicio
lista1.shift('z')//remove no inicio

console.log (lista3)
console.log(lista1)




console.log(lista2.length)
