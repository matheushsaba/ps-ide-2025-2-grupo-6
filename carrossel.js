function inicializarCarrossel() {
    const carousel = document.querySelector('#carrossel');
    const slides = carousel.querySelectorAll('.slide');
    const prevButton = carousel.querySelector('#botaoAnterior');
    const nextButton = carousel.querySelector('#botaoSeguinte');
    const scrollThumb = carousel.querySelector('#barraThumb');
    const scrollTrack = carousel.querySelector('.barra-track');
    const scrollFill  = carousel.querySelector('.barra-fill');

    let currentSlideIndex = 0;
    const totalSlides = slides.length;
    const stepPercent = totalSlides > 0 ? (100 / totalSlides) : 100;

    if (scrollThumb) {
        scrollThumb.style.width = stepPercent + '%';
    }

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
        const leftPercent = stepPercent * currentSlideIndex;
        scrollThumb.style.left = leftPercent + '%';
    }

    nextButton.addEventListener('click', () => {
        showSlide(currentSlideIndex + 1);
    });

    prevButton.addEventListener('click', () => {
        showSlide(currentSlideIndex - 1);
    });

    showSlide(currentSlideIndex);
}

export { inicializarCarrossel };