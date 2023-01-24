const botaoAbrirTrailer = document.querySelector(".botao-trailer");
const botaoFecharTrailer = document.querySelector(".fechar-modal");
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;

/* Conceito DRY: Don't Repeat Yourself. Quando uma mesma ação é repetida em diversos locais do código, podemos transformá-la em uma função para facilitar a manutenção do código e torná-lo mais limpo */

function alternar() {
  modal.classList.toggle("aberto");
}

/* JEITO 1 DE ESCREVER (FUNÇÃO ANÔNIMA + ARROW FUNCTION) */

botaoAbrirTrailer.addEventListener("click", () => {
  alternar();
  video.setAttribute("src", linkDoVideo);
});

/* JEITO 2 DE ESCREVER (POR EXTENSO) */

botaoFecharTrailer.addEventListener("click", function () {
  alternar();
  video.setAttribute("src", "");
});
