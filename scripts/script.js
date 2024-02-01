// Obter elementos do DOM
const searchInput = document.getElementById("search-input");
const resultsArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById("cards-container");

// Função para fazer a requisição da API
function requestApi(termoDeBusca) {
  // URL do endpoint da API
  const url = `https://api-spotify-eta.vercel.app/artists?name_like=${termoDeBusca}`;

  // Buscar dados da API
  fetch(url)
    .then((resposta) => resposta.json())
    .then((resultado) => exibirResultados(resultado));
}

// Função para exibir os resultados da busca
function exibirResultados(resultado) {
  // Obter elementos individuais
  const nomeArtista = document.getElementById("artist-name");
  const imagemArtista = document.getElementById("artist-img");

  // Esconder resultados da playlist
  resultPlaylist.style.display = "none";

  // Exibir nome e imagem de cada artista
  resultado.forEach((elemento) => {
    nomeArtista.innerText = elemento.name;
    imagemArtista.src = elemento.urlImg;
  });

  // Mostrar o container de resultados de artistas
  resultsArtist.classList.remove("hidden");
}

// Listener de evento para mudanças de input
document.addEventListener("input", function () {
  // Obter o termo de busca
  const termoDeBusca = searchInput.value.toLowerCase();

  // Verificar se o termo de busca está vazio
  if (termoDeBusca === "") {
    resultPlaylist.style.display = "flex";
    resultsArtist.style.display = "none";
    return;
  }

  // Esconder resultados da playlist e mostrar resultados de artistas
  resultPlaylist.style.display = "none";
  resultsArtist.style.display = "flex";

  // Fazer a requisição da API com o termo de busca
  requestApi(termoDeBusca);
});
