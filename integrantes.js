export function carregarIntegrantes() {
  fetch("integrantes.htmlfrag")
    .then(res => res.text())
    .then(html => {
      const grid = document.getElementById("grid");
      grid.innerHTML = html;

      const cartoes = grid.querySelectorAll(".cartoes_integrantes");
      const colunas = 4; // número de colunas do grid

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const linhaIndex = parseInt(entry.target.dataset.linha);
          const inicio = linhaIndex * colunas;
          const fim = inicio + colunas;

          if (entry.isIntersecting) {
            for (let j = inicio; j < fim && j < cartoes.length; j++) {
              cartoes[j].classList.add("show");
            }
          } else {
            for (let j = inicio; j < fim && j < cartoes.length; j++) {
              cartoes[j].classList.remove("show");
            }
          }
        });
      }, {
        threshold: 0.15
      });

      cartoes.forEach((cartao, i) => {
        const linha = Math.floor(i / colunas);
        cartao.dataset.linha = linha;

        if (i % colunas === 0) {
          observer.observe(cartao);
        }
      });
    })
    .catch(err => console.error("Erro ao carregar integrantes:", err));
}
