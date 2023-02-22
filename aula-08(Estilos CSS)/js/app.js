import modificador from './modificador.js'
import ingredientes from './ingredientes.js'

let ingredientesOrdenados = modificador.ordenar(ingredientes, 'nome')
let ingredientesCapitalizadosOrdenados = modificador.capitalizar(ingredientesOrdenados, 'nome')

let containerIngredientes = document.getElementById('container-ingredientes')

for(let ingredientes of ingredientesCapitalizadosOrdenados){
    let textoHtml = `
        <div class="ingrediente">
            <img src="img/${ingredientes.img}" alt="Imagem agrião">
            <p class="nome-ingrediente">${ingredientes.nome}</p>
        </div>
    `
    containerIngredientes.innerHTML += textoHtml
}