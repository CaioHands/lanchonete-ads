// Elementos da página
const botoesAdicionar = document.querySelectorAll('.btn-adicionar');
const contadorHtml = document.getElementById('contador-itens');
const listaCarrinho = document.getElementById('lista-carrinho');
const valorTotalHtml = document.getElementById('valor-total');

// Elementos da sidebar
const btnAbrirCarrinho = document.getElementById('abrir-carrinho');
const btnFecharCarrinho = document.getElementById('fechar-carrinho');
const sidebar = document.getElementById('sidebar-carrinho');

// Estado do carrinho
let totalNoCarrinho = 0;
let valorTotal = 0;

// Converte "R$ 28,00" em 28
function precoParaNumero(texto) {
    return parseFloat(texto.replace('R$', '').trim().replace(',', '.'));
}

// Converte 28 em "28,00"
function numeroParaPreco(numero) {
    return numero.toFixed(2).replace('.', ',');
}

// Adicionar item (lanches e bebidas)
botoesAdicionar.forEach((botao) => {
    botao.addEventListener('click', () => {
        const card = botao.closest('.card-produto');
        const nome = card.querySelector('h3').innerText;
        const precoTexto = card.querySelector('.preco-destaque').innerText;

        // Contador de itens
        totalNoCarrinho++;
        contadorHtml.innerText = totalNoCarrinho;

        // Cria o item na lista do carrinho
        const item = document.createElement('li');
        item.innerText = `1x ${nome} - ${precoTexto}`;
        listaCarrinho.appendChild(item);

        // Atualiza o total
        valorTotal += precoParaNumero(precoTexto);
        valorTotalHtml.innerText = numeroParaPreco(valorTotal);
    });
});

// Abrir sidebar
btnAbrirCarrinho.addEventListener('click', () => {
    sidebar.classList.replace('carrinho-oculto', 'carrinho-aberto');
});

// Fechar sidebar
btnFecharCarrinho.addEventListener('click', () => {
    sidebar.classList.replace('carrinho-aberto', 'carrinho-oculto');
});