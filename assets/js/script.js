// Função para botão "Voltar"
function goBack() {
    window.history.back();
}
// Seleciona elementos do pop-up
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupSubtitle = document.getElementById('popup-subtitle');
const popupImg = document.getElementById('popup-img');
const popupRealName = document.getElementById('popup-realname');
const popupFirst = document.getElementById('popup-first');
const popupAffiliation = document.getElementById('popup-affiliation');
const popupSkills = document.getElementById('popup-skills');
const popupPop = document.getElementById('popup-pop');
const popupComics = document.getElementById('popup-comics');
const popupAchievement = document.getElementById('popup-achievement');
const popupDescription = document.getElementById('popup-description');
const popupClose = document.querySelector('.popup-close');

// Função para abrir pop-up
function showPopup(data) {
    popupTitle.textContent = data.name;
    popupSubtitle.textContent = data.signature || '';
    popupImg.src = data.img;
    popupImg.alt = data.name;
    popupRealName.textContent = data.realName || 'Desconhecido';
    popupFirst.textContent = data.firstAppearance || 'Desconhecido';
    popupAffiliation.textContent = data.affiliation || 'Desconhecido';
    popupSkills.textContent = data.skills || 'Desconhecido';
    popupPop.textContent = data.popCulture || 'Desconhecido';
    popupComics.textContent = data.otherComics || 'Desconhecido';
    popupAchievement.textContent = data.achievement || 'Desconhecido';
    popupDescription.textContent = data.description || '';
    popup.style.display = 'flex';
}

// Fechar pop-up
popupClose.addEventListener('click', () => popup.style.display = 'none');
popup.addEventListener('click', e => {
    if(e.target === popup) popup.style.display = 'none';
});

// Adicionando clique aos cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const data = {
            name: card.querySelector('h3').textContent,
            signature: '', // coloque aqui a frase de assinatura se quiser
            img: card.querySelector('img').src,
            realName: 'Informação', 
            firstAppearance: 'Informação',
            affiliation: 'Informação',
            skills: 'Informação',
            popCulture: 'Informação',
            otherComics: 'Informação',
            achievement: 'Informação',
            description: 'Descrição detalhada do personagem'
        };
        showPopup(data);
    });
});
