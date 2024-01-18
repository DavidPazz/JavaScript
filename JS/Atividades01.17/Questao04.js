const prompt = require ('prompt-sync') ()

function ehPrimo(numero) {
    // Se o número for menor que 2, não é primo
    if (numero < 2) {
      return false;
    }
  
    // Verifica se o número é divisível por algum número entre 2 e a raiz quadrada do número
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
  
    // Se o número não for divisível por nenhum número entre 2 e a raiz quadrada do número, então é primo
    return true;
  }
  
  console.log(ehPrimo(13)); // true
  console.log(ehPrimo(10)); // false
  
  