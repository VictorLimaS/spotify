// Função para fazer a requisição da API
function requestApi(termoDeBusca) {
  // URL do endpoint da API
  const url = `https://api-spotify-eta.vercel.app/artists?name_like=${termoDeBusca}`;
  
  // Buscar dados da API usando a função fetch
  fetch(url)
    // Quando a resposta da requisição estiver disponível, converte a resposta para JSON
    .then((resposta) => resposta.json())
    // Quando a conversão para JSON estiver completa, chama a função para exibir os resultados
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
