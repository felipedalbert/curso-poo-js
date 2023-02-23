import modificador from './modificador.js'
import ingredientes from './ingredientes.js'
import filter from './filter.js'

modificador.gerarAlfabeto() //geral alfabeto de options
filter.listaSemFiltro(modificador.capitalizar(ingredientes, 'nome'))
//gera uma a lista padrão de ingredientes

const select = document.querySelector('select');

select.addEventListener('change', (select)=>{
    if((select.target.value == 'A-Z') || (select.target.value == 'Z-A')){
        filter.filtroAlfabetico(select.target.value, ingredientes) // dentro de cada função será chamado a função de iterador para o innerHTML
        console.log('oi')
    }else if(select.target.value == 'default'){
        filter.listaSemFiltro(ingredientes)
    }else{
        filter.filtroPorLetra(select.target.value, ingredientes)
    }
})


