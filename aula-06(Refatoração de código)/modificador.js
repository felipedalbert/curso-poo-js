function fnCapitalizarNovo(colecao){
    if(typeof colecao[0] == 'object'){
        
        let resultado = colecao.map(obj =>{
            let objClone = {...obj} //É preciso criar clones para manipular objetos no map, pois os objetos não sao imutáveis como os tipos primitivos.
            let letraInicial = objClone.nome.charAt(0).toUpperCase()
            let restoTexto = objClone.nome.slice(1)
            objClone.nome = letraInicial + restoTexto
            return objClone
        })
        
        console.log(resultado)

        //Condição e lógica para array de objetos (mutável)

    }else{
        let resultado = colecao.map(item => {
            let letraInicial = item.charAt(0).toUpperCase();
            let restoTexto = item.slice(1)
            return letraInicial + restoTexto
        })

        console.log(resultado)

        //Condição e lógica para array de tipo primitivo string (imutável)

    }
    
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
    caixaAlta: fnCaixaAlta,
    capitalizarNovo: fnCapitalizarNovo,
    ordenarNovo: fnOrdenarNovo
}