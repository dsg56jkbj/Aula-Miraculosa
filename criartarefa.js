// Exibe a seção de Criar Tarefa
function showCriar() {
    document.getElementById("criar-section").style.display = "block";
    document.getElementById("visualizar-section").style.display = "none";
}

// Exibe a seção de Visualizar Tarefas
function showVisualizar() {
    document.getElementById("criar-section").style.display = "none";
    document.getElementById("visualizar-section").style.display = "block";
}

// Lidar com o envio do formulário de criação de tarefa
document.getElementById("form-criar").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que o formulário seja enviado normalmente
    
    // Coletando os dados do formulário
    const titulo = document.getElementById("titulo").value;
    const dataMaxima = document.getElementById("dataMaxima").value;
    const pergunta1 = document.getElementById("pergunta1").value;
    const resposta1 = document.getElementById("resposta1").value;
    const pergunta2 = document.getElementById("pergunta2").value;
    const resposta2 = document.getElementById("resposta2").value;
    const pergunta3 = document.getElementById("pergunta3").value;
    const resposta3 = document.getElementById("resposta3").value;

    // Verificando se há links de imagens nas respostas
    const imagemRegex = /(https?:\/\/[^\s]+(?:\.jpg|\.jpeg|\.png|\.gif))/g;
    const resposta1Imagem = resposta1.match(imagemRegex) ? `<img src="${resposta1.match(imagemRegex)[0]}" alt="Imagem">` : '';
    const resposta2Imagem = resposta2.match(imagemRegex) ? `<img src="${resposta2.match(imagemRegex)[0]}" alt="Imagem">` : '';
    const resposta3Imagem = resposta3.match(imagemRegex) ? `<img src="${resposta3.match(imagemRegex)[0]}" alt="Imagem">` : '';

    // Exibindo as respostas com as imagens carregadas
    alert(`Tarefa criada com sucesso! Título: ${titulo}, Pergunta 1: ${pergunta1}, Resposta 1: ${resposta1Imagem}, Pergunta 2: ${pergunta2}, Resposta 2: ${resposta2Imagem}, Pergunta 3: ${pergunta3}, Resposta 3: ${resposta3Imagem}`);

    // Limpar o formulário após envio
    document.getElementById("form-criar").reset();
});
