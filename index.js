
//passo 1 pegar os botões no js e verificar quando o usuario clicar
const botoes = document.querySelectorAll('.btn');

const conteudo = document.querySelectorAll('.conteudo')
//passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
botoes.forEach((btn, indice) => {
    btn.addEventListener("click", () => {
        const btnSelected = document.querySelector('.btn.selected');
        btn.classList.add('selected')
        btnSelected.classList.remove('selected');

        
        const conteudoSelected = document.querySelector('.conteudo.selected');
        conteudoSelected.classList.remove('selected');
        conteudo[indice].classList.add('selected')
       
    });
});