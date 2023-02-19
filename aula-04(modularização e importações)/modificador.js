function fnCapitalizar(vetor){
    let modificado = []

    vetor.forEach(item => {
        let letraInicial = item.charAt(0).toUpperCase();
        let restoTexto = item.slice(1)
        let resultado = letraInicial + restoTexto

        modificado.push(resultado)
    });

    return modificado 
}

function fnOrdenar(vetor) {
    return vetor.sort((a,b)=>{
        return a.localeCompare(b) // considera caracteres latinos com acentuação
    })
    
}

function fnCaixaAlta(vetor){
    let modificado = []

    vetor.forEach(item => {
        modificado.push(item.toUpperCase())
    });

    return modificado
}

export default {
    capitalizar: fnCapitalizar,
    ordenar: fnOrdenar,
    caixaAlta: fnCaixaAlta
}