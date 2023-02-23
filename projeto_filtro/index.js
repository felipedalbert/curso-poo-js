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