// HEADER RESPONSIVO:
//função para abrir e fechar o menu
function abrirMenu(){
    const menu = document.querySelector(".menu");
    //fica alternando entre ativo (aberto) e inativo (fechado) o status do menu
    menu.classList.toggle("menu_botao_abrir_ativo");
}

export { abrirMenu };