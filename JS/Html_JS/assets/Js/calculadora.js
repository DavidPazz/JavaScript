function calcular(tipo, valor) {

    if ( tipo === 'num') {
        document.getElementById('resultado').value += valor
    } else if (tipo === 'acao') {
        if (valor === 'c') {
        document.getElementById('resultado').value = '' 
        }
        if (valor === '+' || valor === '-' || valor === '/' || valor === '*' || valor === '.') {
            document.getElementById('resultado').value += valor
        } 
        if(valor === '=') {
            let valorCampo = eval (document.getElementById('resultado').value)
            console.log( eval (valorCampo))
            document.getElementById('resultado').value = valorCampo
        }
    }
}