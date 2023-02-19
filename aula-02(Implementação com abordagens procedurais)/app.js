let ingredientes = ['mel','água', 'sal', 'mostarda']
let modificado = []


for(let i = 0; i < ingredientes.length; i++){
    let letraInicial = ingredientes[i].charAt(0).toUpperCase(); 
    let restoTexto = ingredientes[i].slice(1)
    let resultado = letraInicial + restoTexto
    
    modificado.push(resultado)
}

let ordenado = modificado.sort((a,b)=>{
    return a.localeCompare(b) // considera caracteres latinos com acentuação
})

console.log(ordenado)