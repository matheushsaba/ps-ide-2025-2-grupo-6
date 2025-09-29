document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('#carrossel');
    const slides = carousel.querySelectorAll('.slide');
    const prevButton = carousel.querySelector('#botaoAnterior');
    const nextButton = carousel.querySelector('#botaoSeguinte');
    const scrollThumb = carousel.querySelector('#barraThumb');

    let currentSlideIndex = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        if (index >= totalSlides) {
            // Se estamos no último slide, volta para o primeiro
            currentSlideIndex = 0;
        } else if (index < 0) {
            // Se estamos no primeiro slide, vai para o último
            currentSlideIndex = totalSlides - 1;
        } else {
            // Senão, apenas atualiza o índice
            currentSlideIndex = index;
        }

        // Esconde os slides inativos
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });

        // Mostra o slide ativo
        slides[currentSlideIndex].style.display = 'block';

        updateScrollThumb();
    }

    function updateScrollThumb() {
        // TODO: implementar a animação da barra de rolagem
    }

    nextButton.addEventListener('click', () => {
        showSlide(currentSlideIndex + 1);
    });

    prevButton.addEventListener('click', () => {
        showSlide(currentSlideIndex - 1);
    });

    showSlide(currentSlideIndex); // Mostra o carrossel inicial quando a página carrega
});