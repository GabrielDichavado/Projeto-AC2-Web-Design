// Função para botão "Voltar"
function goBack() {
    window.history.back();
}// =========================// Seleciona todos os cards
const cards = document.querySelectorAll('.card');

// Seleciona o popup e o botão de fechar
const popup = document.getElementById('popup');
const btnClose = popup.querySelector('.popup-close');

// Para cada card, adiciona o evento de clique
cards.forEach(card => {
    card.addEventListener('click', () => {
        // Pega os dados do card (que você colocou como data-atributos)
        const title = card.dataset.name;
        const subtitle = card.dataset.subtitle;
        const img = card.dataset.img;
        const realname = card.dataset.realname;
        const first = card.dataset.first;
        const affiliation = card.dataset.affiliation;
        const skills = card.dataset.skills;
        const popculture = card.dataset.popculture;
        const comics = card.dataset.comics;
        const achievement = card.dataset.achievement;
        const description = card.dataset.description;

        // Preenche o popup
        document.getElementById('popup-title').textContent = title;
        document.getElementById('popup-subtitle').textContent = subtitle;
        document.getElementById('popup-img').src = img;
        document.getElementById('popup-realname').textContent = realname;
        document.getElementById('popup-first').textContent = first;
        document.getElementById('popup-affiliation').textContent = affiliation;
        document.getElementById('popup-skills').textContent = skills;
        document.getElementById('popup-pop').textContent = popculture;
        document.getElementById('popup-comics').textContent = comics;
        document.getElementById('popup-achievement').textContent = achievement;
        document.getElementById('popup-description').textContent = description;

        // Abre o popup
        popup.style.display = 'flex';
    });
});

// Fecha o popup
btnClose.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Fecha ao clicar fora do conteúdo
popup.addEventListener('click', (e) => {
    if(e.target === popup) popup.style.display = 'none';
});
