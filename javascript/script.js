
function gerarSaudacao() {
    var saudacoes = ['Olá!', 'Oi!', 'Bem-vindo!', 'Hello!', 'Salut!'];
    var saudacaoAleatoria = saudacoes[Math.floor(Math.random() * saudacoes.length)];
    return saudacaoAleatoria;
}

let clicks = 0;
function atualizarSaudacao() {
    var divOi = document.querySelector('div');
    if (divOi) {
        divOi.textContent = gerarSaudacao();
    }
}
function contarClick() {
    clicks = clicks + 1;
    var divCounter = document.querySelector('div');
    if(divCounter){
        divCounter.textContent = clicks;
    }
}
document.addEventListener('DOMContentLoaded', function() {
atualizarSaudacao();
});

document.addEventListener('click', function() {
    contarClick();
})