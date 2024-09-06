// ARQUIVO PARA LÓGICA

function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    if (!campoPesquisa) {
        section.innerHTML = "<p> Nada foi encontrado. Você não enviou uma palavra de busca</p>";
        return;
    }
    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    
    for (let dado of dados) {
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let tags = dado.tags ? dado.tags.toLowerCase() : "";  // Adiciona uma verificação para tags

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Formata a descrição para incluir uma lista
            let descricaoHTML = dado.descricao
                .split('\n')
                .map(item => {
                    if (item.trim().startsWith('-')) {
                        return `<li>${item.trim().substring(1).trim()}</li>`;
                    }
                    // Adiciona um <strong> para o título da seção
                    return item.trim() ? `<strong>${item.trim()}</strong>` : '';
                })
                .join('\n');

            resultados += `     
            <div class="item-resultado">
                <h2>
                    <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${descricaoHTML}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>     
        `;
        }
    }

    // Se resultados estiver vazio, exibe a mensagem
    if (!resultados) {
        resultados = "<p> Nada foi encontrado, tente outra coisa </p>";
    }

    section.innerHTML = resultados;
}
