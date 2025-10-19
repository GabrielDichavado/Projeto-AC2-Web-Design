// Função para botão "Voltar"
function goBack() {
    window.history.back();
}// =========================
// Const com vilões
// =========================
const viloes = [
  {
    nome: "Coringa",
    aparicao: "Batman #1 (1940)",
    descricao: "O príncipe do crime de Gotham, mestre do caos e inimigo mortal do Batman.",
    habilidades: "Planejamento criminoso, insanidade estratégica",
    imagem: "imagens/coringa.jpg"
  },
  {
    nome: "Charada",
    aparicao: "Detective Comics #140 (1948)",
    descricao: "Vilão que desafia Batman com enigmas complexos e armadilhas inteligentes.",
    habilidades: "Crimes intelectuais, enigmas complexos",
    imagem: "imagens/charada.jpg"
  },
  // Adicione os outros vilões aqui
];

// =========================
// Const com aliados
// =========================
const aliados = [
  {
    nome: "Robin",
    aparicao: "Detective Comics #38 (1940)",
    descricao: "Parceiro juvenil do Batman, ágil e esperto.",
    habilidades: "Acrobacia, combate corpo a corpo",
    imagem: "imagens/robin.jpg"
  },
  {
    nome: "Batgirl",
    aparicao: "Detective Comics #359 (1967)",
    descricao: "Aliada do Batman, especialista em tecnologia e combate.",
    habilidades: "Inteligência, combate, gadgets",
    imagem: "imagens/batgirl.jpg"
  },
  // Adicione os outros aliados aqui
];

// =========================
// Função para preencher pop-up
// =========================
function preencherPopup(personagem) {
  const popup = document.querySelector("#popup");
  popup.querySelector(".nome").innerText = personagem.nome;
  popup.querySelector(".aparicao").innerText = personagem.aparicao;
  popup.querySelector(".descricao").innerText = personagem.descricao;
  popup.querySelector(".habilidades").innerText = personagem.habilidades;
  popup.querySelector("img").src = personagem.imagem;
}

// =========================
// Eventos de clique para vilões
// =========================
document.querySelectorAll(".card-vilao").forEach((card, index) => {
  card.addEventListener("click", () => {
    preencherPopup(viloes[index]);
    abrirPopup(); // Função que você já tem para abrir o pop-up
  });
});

// =========================
// Eventos de clique para aliados
// =========================
document.querySelectorAll(".card-aliado").forEach((card, index) => {
  card.addEventListener("click", () => {
    preencherPopup(aliados[index]);
    abrirPopup();
  });
});

