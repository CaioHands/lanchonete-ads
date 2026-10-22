
const form = document.getElementById('form-cadastro');

form.addEventListener('submit', function(event) {
    // Impede o recarregamento da página
    event.preventDefault();

    // Captura os dados
    const nomeDigitado = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirma-senha').value;

    // Área das mensagens
    const mensagensErro = document.getElementById('mensagensErro');

    // Limpa mensagens anteriores
    mensagensErro.innerHTML = '';

    let mensagem = '';

    // Verifica o tamanho da senha
    if (senha.length < 6) {
        mensagem = 'A senha deve ter no mínimo 6 caracteres.';
    }
    // Verifica se as senhas são iguais
    else if (senha !== confirmarSenha) {
        mensagem = 'As senhas não coincidem.';
    }

    // Exibe a mensagem de erro
    if (mensagem !== '') {
        const paragrafo = document.createElement('p');
        paragrafo.textContent = mensagem;
        paragrafo.classList.add('erro');

        mensagensErro.appendChild(paragrafo);
        return;
    }

    // Se tudo estiver correto
    console.log('Ação interceptada com sucesso!');
    console.log('Cliente:', nomeDigitado);
    
    // Dentro da validação de sucesso do seu formulário:
    window.location.href = "cardapio.html";

});
