import { eventoFormulario } from "./form.js";
import { inicializarCarrossel } from "./carrossel.js";

document.addEventListener('DOMContentLoaded', () => {

    // --- FORMULÁRIO ---
    const formulario = document.querySelector("#formulario_contato");
    //evento de enviar o formulário
    formulario.addEventListener("submit", eventoFormulario);

    // --- CARROSSEL ---
    inicializarCarrossel();
});
