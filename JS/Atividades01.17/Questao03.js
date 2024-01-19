/*3. Faça um programa, com uma função sem argumento. A função retorna o valor de caractere 'P', se for um numero positivo, e 'N' se for negativo e 'Z' se for zero. */

const prompt = require ('prompt-sync') ()

function tipoNumero() {
    let numero = prompt("Digite um número:");  
    numero = parseInt(numero);
  
    // Se o número for positivo, retorna 'P'
    if (numero > 0) {
      return "P";
    }
  
    // Se o número for negativo, retorna 'N'
    else if (numero < 0) {
      return "N";
    }
  
    // Se o número for zero, retorna 'Z'
    else {
      return "Z";
    }
  }

  console.log(tipoNumero());