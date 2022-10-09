//Ativar links do menu

const links = document.querySelectorAll("#header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

//Ativar itens orçamento

const inputs = new URLSearchParams(location.search);

function checar(parametro) {
  const elemento = document.getElementById(parametro);
  elemento.checked = true;
}

inputs.forEach(checar);

//Perguntas frequentes

const perguntas = document.querySelectorAll(".texto-perguntas button");

function ativarPergunta(event) {
  const elemento = event.currentTarget;
  const controls = elemento.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  elemento.setAttribute("aria-expanded", ativa);
}

function eventoPergunta(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventoPergunta);

//imagem bicicletas

const galeria = document.querySelectorAll(".imagens-bike img");
const galeriaContainer = document.querySelector(".imagens-bike");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 920px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

//animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
