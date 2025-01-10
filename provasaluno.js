// Simulação de quando as provas estarão disponíveis (status)
const provasDisponiveis = false; // Defina como true quando as provas estiverem disponíveis

window.onload = function() {
    if (provasDisponiveis) {
        // Se as provas estiverem disponíveis, atualiza o link e o botão
        document.getElementById('linkProva').href = "https://forms.gle/SeuFormularioGoogleForms"; // Substitua com o link real do Google Form
        document.getElementById('linkProva').innerText = "Clique aqui para acessar a prova!";
        document.querySelector('.aviso').style.display = 'block';
    } else {
        // Caso contrário, apenas exibe a mensagem informando que as provas estarão em breve
        document.querySelector('.aviso').style.display = 'block';
    }
};
