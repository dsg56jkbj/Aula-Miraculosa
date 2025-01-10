// login.js
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    // Listas de alunos e professores
    const alunos = {
        'maribugdadeepweb': 'Ma123456789',
        'thinkaboutguh': 'Th123456789',
        'miraculizado': 'Mi123456789',
        'miihhv': 'Mi123456789',
        'dearladyjupiter': 'De123456789',
        'phelixcoisinho': 'Ph123456789',
        'rosiearegold279': 'Ro123456789',
        '_harizz1': 'Ha123456789',
        'tensosinho_str': 'Te123456789',
        'pvd_ozzie.zz67296': 'Pv123456789',
        'babyy.z': 'Ba123456789',
        'naomiizita': 'Na123456789',
        'Brenopwf': 'Br123456789',
        'ayu03212': 'Ay123456789',
        'bugflycatboy': 'Bu123456789',
        'rosaluc': 'Ro123456789',
        'danielcraftftim': 'Da123456789',
        'symphonyy.z': 'Sy123456789',
        'cfelisa99_08545': 'Cf123456789',
        'lexx2218': 'Le123456789',
        'Felix092971': 'Fe123456789',
        'dancra57': 'Da123456789',
        'meucoelho': 'Me123456789',
        'eliseueureka_74818': 'El123456789',
        'Macacomago': 'Ma123456789',
        'fem__': 'Fe123456789',
        'Quited_Quited': 'Qu123456789',
        'bywaldorf.': 'By123456789',
        'algorithomus': 'Al123456789',
        'marlissonblanc': 'Ma123456789',
        'Solaria2': 'So123456789',
        'mpcmaster2024': 'Mp123456789',
        'verdadeirawikipedia': 'Ve123456789',
        'realm_of_jewels': 'Re123456789',
        'harizz1': 'Ha123456789',
        'ronald_claw26': 'Ro123456789',
        'mihhv': 'Mi123456789',
        'coeio0177': 'Co123456789',
        'samcomsono': 'Sa123456789',
        'sonecadom': 'So123456789',
        'mapadaluz': 'Ma123456789',
        'emeraldxx': 'Em123456789',
        'mim1zrsh': 'Mi123456789',
        'lisa038149': 'Li123456789',
        'nattosun': 'Na123456789',
        'hakila0773': 'Ha123456789',
        'jonybee_74049': 'Jo123456789',
        'hakila0773': 'Ha123456789',
        'springtrap4947': 'Sp123456789',
        'jujutsu_kaisen113': 'Ju123456789',
        'Davizin': 'Da123456789'
    };
    
    const professores = {
        '00011328419': 'Miraculo321',
        '00010110217': 'Tikkitransformar123'
    };
    
    // Verificação de login
    if (alunos[username] && alunos[username] === password) {
        // Redireciona para a página do aluno
        window.location.href = 'inicialaluno.html';
    } else if (professores[username] && professores[username] === password) {
        // Redireciona para a página do professor
        window.location.href = 'inicialprof.html';
    } else {
        // Mensagem de erro se o login for inválido
        errorMessage.textContent = "Usuário ou senha incorretos.";
    }
});
