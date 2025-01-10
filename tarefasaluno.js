// Simulação de Tarefas
const tarefas = [
    {
        titulo: "Tarefa 1: Matemática",
        dataEntrega: "2025-01-20",
        perguntas: [
            { pergunta: "Qual é a fórmula de Bhaskara?", tipo: "texto" },
            { pergunta: "Mostre a resolução do exercício 4 da página 12.", tipo: "texto" }
        ]
    },
    {
        titulo: "Tarefa 2: História",
        dataEntrega: "2025-01-25",
        perguntas: [
            { pergunta: "Quem foi Dom Pedro I?", tipo: "texto" },
            { pergunta: "Escreva sobre a independência do Brasil.", tipo: "texto" }
        ]
    }
];

// Carregar as tarefas na página
function carregarTarefas() {
    const taskContainer = document.querySelector('.task-container');

    tarefas.forEach((tarefa, index) => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.innerHTML = `<h3>${tarefa.titulo}</h3><p>Data de Entrega: ${tarefa.dataEntrega}</p>`;
        taskElement.onclick = () => exibirTarefa(index);
        taskContainer.appendChild(taskElement);
    });
}

// Exibir a tarefa e suas perguntas
function exibirTarefa(index) {
    const tarefa = tarefas[index];
    const tituloTarefa = document.getElementById('tituloTarefa');
    const dataEntrega = document.getElementById('dataEntrega');
    const perguntasTarefa = document.getElementById('perguntasTarefa');
    const statusTarefa = document.querySelector('.tarefas-status');

    tituloTarefa.innerText = tarefa.titulo;
    dataEntrega.innerText = tarefa.dataEntrega;

    perguntasTarefa.innerHTML = '';
    tarefa.perguntas.forEach((pergunta, idx) => {
        const perguntaElement = document.createElement('div');
        perguntaElement.innerHTML = `
            <p><strong>${pergunta.pergunta}</strong></p>
            <input type="text" id="resposta${idx}" placeholder="Digite sua resposta aqui">
        `;
        perguntasTarefa.appendChild(perguntaElement);
    });

    statusTarefa.style.display = 'block';
}

// Enviar a resposta (simulação)
document.getElementById('enviarResposta').addEventListener('click', function() {
    alert("Resposta enviada com sucesso!");
});

// Inicializa as tarefas ao carregar a página
window.onload = carregarTarefas;
