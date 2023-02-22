import modificador from './modificador.js'
import ingredientes from './ingredientes.js'


// let inredientesOrdenados = modificador.ordenar(ingredientes, 'nome')

// let ingredientes = ['mel','água', 'sal', 'mostarda']

let ingredientesOrdenados = modificador.ordenar(ingredientes, 'nome')
let ingredienteCapitalizados = modificador.capitalizar(ingredientesOrdenados, 'nome')

console.log(ingredienteCapitalizados)

let containerIngredientes = document.getElementById('container-ingredientes')

for(let ingredientes of ingredientesOrdenados){
    let textoHtml = `
        <div class="ingrediente">
            <img src="img/${ingredientes.img}" alt="Imagem agrião">
            <p class="nome-ingrediente">${ingredientes.nome}</p>
        </div>
    `
    containerIngredientes.innerHTML += textoHtml
}








