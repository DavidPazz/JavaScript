let compraThis = function(params) {
    console.log( this === params)
}
 compraThis(global)

 const objeto = {}
// bind = cria uma nova função, ele tem sua propria palavra THIS especificada.
 compraThis = compraThis.bind(objeto)  
 compraThis(global)
 compraThis(objeto)