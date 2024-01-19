const prompt = require('prompt-sync') ()

function converter (hora, minuto, periodo) {
    /* Se a hora for menor que 12, então é A.M.
     Se a hora for maior ou igual a 12, então é P.M.*/

    if (hora < 12) {
      return `${hora}:${minuto} ${periodo === "A" ? "A.M." : "P.M."}`;
    }

    return `${hora - 12}:${minuto} ${periodo === "A" ? "A.M." : "P.M."}`;
  }
  
    function exibir(hora, minuto, periodo) {
    console.log(converter(hora, minuto, periodo));
  }

    while (true) {  //Não tem a hora correta então vai ser While
    
    // Solicita a entrada do usuário
    hora = parseInt(prompt("Hora (00-23):"));
    minuto = parseInt(prompt("Minuto (00-59):"));
    periodo = prompt("Período (A/P):");
  
    // Valida a entrada do usuário
    if (hora < 0 || hora > 23) {
      console.log("Hora inválida.");
      continue;
    }
  
    if (minuto < 0 || minuto > 59) {
      console.log("Minuto inválido.");
      continue;
    }
  
    if (periodo !== "A" && periodo !== "P") {
      console.log("Período inválido.");
      continue;
    }
  
    // Realiza a conversão
    exibir(hora, minuto, periodo);
  
    // Será que o usuário se deseja continuar? qualquer duvida pode ser S/N

    resposta = prompt("Deseja continuar? (S/N):");
    if (resposta === "N") {
      break;
    }
  }