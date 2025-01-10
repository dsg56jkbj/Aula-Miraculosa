// Função para carregar novos recados (por exemplo, de um banco de dados ou API)
function carregarRecados() {
    const recados = [
        "Prova de História marcada para o dia 15 de janeiro.",
        "Nova tarefa de Matemática disponível. Prazo: 20 de janeiro.",
        "Recado do Professor: Não se esqueça de revisar os conceitos vistos na última aula."
    ];
    
    const listaRecados = document.getElementById("recados-lista");
    recados.forEach(recado => {
        let li = document.createElement("li");
        li.textContent = recado;
        listaRecados.appendChild(li);
    });
}

// Chama a função para carregar recados quando a página for carregada
window.onload = carregarRecados;
