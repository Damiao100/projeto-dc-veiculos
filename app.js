

function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um carro ou marca</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = ""; 
    let descricao = "";
    
    

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
       
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) ) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}

// Função para obter o ano atual
function getYear() {
    const date = new Date();
    return date.getFullYear();
}

// Função para obter o ano atual
function getYear() {
    const date = new Date();
    return date.getFullYear();
}

// Seleciona o elemento com o ID "copyright"
const copyrightElement = document.getElementById("copyright");

// Atualiza o texto do elemento com o ano atual
copyrightElement.textContent = getYear() + " - DC Veículos - Seminovos. Todos os direitos reservados";
S