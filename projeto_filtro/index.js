const ingredientes = [
    { nome: "Alface" },
    { nome: "Abacate" },
    { nome: "Batata" },
    { nome: "Cebola" },
    { nome: "Cenoura" },
    { nome: "Tomate" }
  ];
  
  function filtrarPorLetra() {
    const letra = document.getElementById("letra").value.toLowerCase(); // Obtém a letra selecionada
  
    const ingredientesFiltrados = ingredientes.filter(ingrediente => {
      return ingrediente.nome.toLowerCase().startsWith(letra); // Retorna true se o nome do ingrediente começa com a letra selecionada
    });
  
    console.log(ingredientesFiltrados); // Exibe no console a lista de ingredientes filtrados
  }
  

// Abstração de código para filtro

/*

const selects = document.querySelectorAll('select');

selects.forEach(select => {

    select.addEventListener('change', () => {

        encontrar alguma meneira de zerar o textoHtml
        ifs (select.value == 'valorValue'){
            funcaoDeFiltro() chamar determinada função com base no valor do select...
            (utilizar o return nas funções pra retornar uma lista clonada filtrada)

            for(let ingredientes of nomeFunção){texto html}
                                    nome da função acima com o retorno da lista clonada filtrada
            
        }
    

    }
}

*/


function fnListaSemFiltro(ingredientes){
  let cloneSemFiltro = JSON.parse(JSON.stringify(ingredientes))
  fnIteradorDeContudo(cloneSemFiltro)
}


function fnFiltroAlfabetico(tipoFiltro, ingredientes){  
  let cloneFiltroAlfabetico = JSON.parse(JSON.stringify(ingredientes))
  let resultadoOperacao = (tipoFiltro == 'A-Z')? cloneFiltroAlfabetico.sort((a,b) =>{
     return a.nome.localeCompare(b.nome) 
  }) : cloneFiltroAlfabetico.sort((a,b) =>{
      return b.nome.localeCompare(a.nome) 
  })

  fnIteradorDeContudo(resultadoOperacao)
}


function fnFiltroPorLetra(letra, ingredientes){
  let cloneFiltroPorLetra = JSON.parse(JSON.stringify(ingredientes))
  const resultadoOperacao = cloneFiltroPorLetra.filter(objeto => {
      return objeto.nome.startsWith(letra);
  });

  fnIteradorDeContudo(resultadoOperacao)
}


function fnIteradorDeContudo(itensFiltrados){
  let containerIngredientes = document.getElementById('container-ingredientes')
  containerIngredientes.innerHTML = ''

  for(let ingrediente of itensFiltrados){
      let textoHtml = `
          <div class="ingrediente">
              <img src="img/${ingrediente.img}" alt="imagem ${ingrediente.nome}">
              <p class="nome-ingrediente">${ingrediente.nome}</p>
          </div>
      `
      containerIngredientes.innerHTML += textoHtml
  }
}


export default{
  listaSemFiltro: fnListaSemFiltro,
  filtroAlfabetico : fnFiltroAlfabetico,
  filtroPorLetra: fnFiltroPorLetra
}