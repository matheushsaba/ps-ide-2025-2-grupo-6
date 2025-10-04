function inicializarCarrossel() {
    const carousel = document.querySelector('#carrossel');
    const slides = carousel.querySelectorAll('.slide');
    const prevButton = carousel.querySelector('#botaoAnterior');
    const nextButton = carousel.querySelector('#botaoSeguinte');
    const scrollThumb = carousel.querySelector('#barraThumb');
    const mediaQueryList = window.matchMedia("(max-width: 1000px)");

    let currentSlideIndex = 0;
    const totalSlides = slides.length;
    const stepPercent = totalSlides > 0 ? (100 / totalSlides) : 100; // Percentual que cada passo do thumb deve percorrer

    // Define a largura do thumb proporcional ao total de slides
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

        // Esconde todos slides
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });

        // Ativa o slide do index atual
        if(mediaQueryList.matches){
            slides[currentSlideIndex].style.display = 'flex';
        } else {
            slides[currentSlideIndex].style.display = 'block';
        }

        updateScrollThumb();
    }

    function updateScrollThumb() {
        // Calcula deslocamento do thumb em porcentagem (0% -> início do trilho)
        const leftPercent = stepPercent * currentSlideIndex;
        scrollThumb.style.left = leftPercent + '%';

        // Atualiza classes para ajustar o overlap da borda do thumb com os botões
        scrollThumb.classList.remove('primeiro', 'ultimo');
        if (currentSlideIndex === 0) {
            scrollThumb.classList.add('primeiro');
        } else if (currentSlideIndex === totalSlides - 1) {
            scrollThumb.classList.add('ultimo');
        }
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