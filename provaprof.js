// Função para simular envio de recado
function enviarRecado() {
    const recado = document.getElementById("recado").value;
    
    if (recado.trim() !== "") {
        alert("Recado enviado com sucesso para os alunos: \n" + recado);
        document.getElementById("recado").value = ""; // Limpar campo após envio
    } else {
        alert("Por favor, digite um recado antes de enviar.");
    }
}
