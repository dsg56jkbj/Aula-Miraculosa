// Simulação de recados (dados que poderiam vir de um backend)
const recados = [
    {
        autor: "Professor(a) João",
        mensagem: "Não se esqueça de entregar a tarefa de matemática até o dia 20 de janeiro!",
        data: "2025-01-10"
    },
    {
        autor: "Professor(a) Maria",
        mensagem: "Revisem o conteúdo da aula de história, temos uma prova semana que vem.",
        data: "2025-01-08"
    }
];

// Carregar os recados na página
function carregarRecados() {
    const recadosContainer = document.querySelector('.recados-container');

    recados.forEach((recado) => {
        const recadoElement = document.createElement('div');
        recadoElement.classList.add('recado');
        recadoElement.innerHTML = `
            <p><strong>${recado.autor}</strong> <span>${recado.data}</span></p>
            <p>${recado.mensagem}</p>
        `;
        recadosContainer.appendChild(recadoElement);
    });
}

// Enviar recado (simulação)
document.getElementById('enviarRecado').addEventListener('click', function() {
    const recadoInput = document.getElementById('recadoInput').value;

    if (recadoInput.trim() !== "") {
        alert("Recado enviado com sucesso!");
        // Adicionar o novo recado à lista de recados
        recados.push({
            autor: "Aluno",
            mensagem: recadoInput,
            data: new Date().toLocaleDateString('pt-BR')
        });

        // Limpar o campo de texto
        document.getElementById('recadoInput').value = "";
        
        // Recarregar os recados para incluir o novo
        document.querySelector('.recados-container').innerHTML = "";
        carregarRecados();
    } else {
        alert("Por favor, escreva um recado antes de enviar.");
    }
});

// Inicializa a lista de recados ao carregar a página
window.onload = carregarRecados;
