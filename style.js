// HEADER RESPONSIVO:
/**função para abrir e fechar o menu */
function abrirMenuResponsivo(){
    const menu = document.querySelector(".menu");
    //fica alternando entre ativo (aberto) e inativo (fechado) o status do menu
    menu.classList.toggle("menu_botao_abrir_ativo");
}

/**
 * funcao para fechar o menu responsivo ao clicar em um link 
 */
function fecharMenuResponsivoAoClicar() {
    const menu = document.querySelector(".menu");
    // pegar todas as tags <a> dentro do menu
    const links = menu.querySelectorAll("a");
    
    // para cada link, adicionar evento de, ao ser clicado, fechar (tirar a classe ativo) o menu
    links.forEach(link => {
        link.addEventListener("click", () => {
            // Fecha o menu no modo responsivo(se o menu de fato estiver em modo responsivo-quando width<=1280px)
            if (window.innerWidth <= 1280) {
                menu.classList.remove("menu_botao_abrir_ativo");
            }
        });
    });
}
export { abrirMenuResponsivo, fecharMenuResponsivoAoClicar };