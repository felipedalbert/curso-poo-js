import modificador from './modificador.js'

console.log(modificador)

let ingredientes = ['mel','água', 'sal', 'mostarda']

let resultadoCapitalizacao = modificador.capitalizar(ingredientes)
let resultadoOrdenacao = modificador.ordenar(resultadoCapitalizacao)
let resultadoCaixaAlta = modificador.caixaAlta(ingredientes)


console.log(resultadoCapitalizacao)
console.log(modificador.caixaAlta(resultadoOrdenacao))
console.log(resultadoCaixaAlta)