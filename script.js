import { eventoFormulario } from "./form.js";
import { inicializarCarrossel } from "./carrossel.js";
import { abrirMenuResponsivo, fecharMenuResponsivoAoClicar } from "./style.js";

document.addEventListener('DOMContentLoaded', () => {

    // --- FORMULÁRIO ---
    const formulario = document.querySelector("#formulario_contato");
    //evento de enviar o formulário
    formulario.addEventListener("submit", eventoFormulario);

    // --- CARROSSEL ---
    inicializarCarrossel();

    // --- MENU RESPONSIVO ---
    const botaoAbrirMenu = document.querySelector("#menu-botao-abrir");
    botaoAbrirMenu.addEventListener("click", abrirMenuResponsivo);
    fecharMenuResponsivoAoClicar();
});
