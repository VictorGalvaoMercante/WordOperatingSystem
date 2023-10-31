
const botoes = document.querySelectorAll('.btn');
const conteudo = document.querySelectorAll('.conteudo')
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