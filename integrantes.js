export function carregarIntegrantes() {
  // busca o conteúdo do arquivo contendo os integrantes
  fetch("integrantes.htmlfrag")
    .then(res => res.text())
    .then(html => {
      // insere o conteúdo dentro da div com id "grid"
      const grid = document.getElementById("grid");
      grid.innerHTML = html;

      // seleciona todos os cartões de integrantes
      const cartoes = grid.querySelectorAll(".cartoes_integrantes");

      // função que lê o número de colunas da grid do CSS
      function getNumColunas() {
        const style = getComputedStyle(grid);
        const templateCols = style.getPropertyValue("grid-template-columns");
        return templateCols.split(" ").length;
      }

      let observer;
      // configura o observer sempre que for chamado
      function configurarObserver() {
        // se já existe um observer antigo, desconecta
        if (observer) observer.disconnect();
          // número de colunas atuais
          const colunas = getNumColunas();

          observer = new IntersectionObserver((entries) => {
          // observa apenas o primero cartão de cada linha
          entries.forEach(entry => {
            const linhaIndex = parseInt(entry.target.dataset.linha);
            const inicio = linhaIndex * colunas;
            const fim = inicio + colunas;

            if (entry.isIntersecting) {
              // quando a linha entra em frame é aplicada a classe show
              // do css em todos cartões da linha
              for (let j = inicio; j < fim && j < cartoes.length; j++) {
                cartoes[j].classList.add("show");
              }
            } else {
              // quando saí do frame remove o show
              for (let j = inicio; j < fim && j < cartoes.length; j++) {
                cartoes[j].classList.remove("show");
              }
            }
          });
          }, {
            // quanto do cartão precisa estar visível (0.005 = 0,5%)
            // com valores muito altos da um glitch que fica mostrando e escondendo
            threshold: 0.005
          });

          // atribui linha para cada cartão novamente
          cartoes.forEach((cartao, i) => {
          const linha = Math.floor(i / colunas);
          cartao.dataset.linha = linha;

          if (i % colunas === 0) {
            observer.observe(cartao);
          }
        });
      }

      // primeira configuração
      configurarObserver();

      // reconfigura quando a janela muda de tamanho
      window.addEventListener("resize", configurarObserver);
    })
    .catch(err => console.error("Erro ao carregar integrantes:", err));
}

