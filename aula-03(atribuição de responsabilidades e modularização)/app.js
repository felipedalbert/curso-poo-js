let ingredientes = ['mel','água', 'sal', 'mostarda']


function capitalizar(ingredientes){
    modificado = []

    for(let i = 0; i < ingredientes.length; i++){
        let letraInicial = ingredientes[i].charAt(0).toUpperCase(); 
        let restoTexto = ingredientes[i].slice(1)
        let resultado = letraInicial + restoTexto
        
        modificado.push(resultado)
    }

    return modificado 
}

function ordenar(ingredientes) {
    return ingredientes.sort((a,b)=>{
        return a.localeCompare(b) // considera caracteres latinos com acentuação
    })
    
}

let resultadoCapitalizacao = capitalizar(ingredientes)
let resultadoOrdenacao = ordenar(resultadoCapitalizacao)


console.log(resultadoCapitalizacao)
console.log(resultadoOrdenacao)