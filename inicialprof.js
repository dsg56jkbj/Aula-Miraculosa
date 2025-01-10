// inicialprof.js
function saveRecado() {
    const recadoText = document.getElementById('recado').value;
    const confirmationMessage = document.getElementById('recado-confirmation');
    
    if (recadoText.trim() !== "") {
        // Salvar recado (Aqui você pode implementar lógica para salvar em um banco de dados ou arquivo)
        confirmationMessage.textContent = "Recado salvo com sucesso!";
        document.getElementById('recado').value = ""; // Limpa o campo de recado
    } else {
        confirmationMessage.textContent = "Por favor, escreva um recado antes de salvar.";
        confirmationMessage.style.color = "red";
    }
}
