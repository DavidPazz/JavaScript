const prompt = require ('prompt-sync') ()

function tipoNumero() {
    // Declara uma variável para armazenar o valor do número
    let numero = prompt("Digite um número:");
  
    // Converte o número para um número inteiro
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