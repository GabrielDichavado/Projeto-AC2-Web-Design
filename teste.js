const VILOES = [
  {
    nome: "Coringa",
    bordao: "O caos é a minha assinatura.",
    nomeReal: "Desconhecido / Vários relatos",
    aparicao: "Batman #1 (1940)",
    afiliacao: "Independente",
    habilidades: "Genialidade criminosa, manipulação, improvisação letal",
    pop: "Filmes: Batman (1989), O Cavaleiro das Trevas (2008); Animação: Batman: The Animated Series; Jogos: Arkham Asylum",
    outrasHQs: "Justice League, Suicide Squad",
    feito: "Criou o caos em Gotham, causando uma guerra entre facções criminosas e desafiando a moralidade do Batman.",
    imagem: "https://upload.wikimedia.org/wikipedia/en/9/9a/Joker_%28DC_Comics_character%29.jpg",
    descricao: "O Coringa, conhecido como o Príncipe Palhaço do Crime, é o arqui-inimigo do Batman e a personificação do caos em Gotham. Sua origem é frequentemente ambígua, mas ele é retratado como um criminoso com intelecto genial e um profundo conhecimento de química e engenharia. Ele utiliza esse conhecimento para criar venenos mortais, como o Gás do Coringa, que deixa suas vítimas com um sorriso macabro no rosto. Sua motivação central não é dinheiro ou poder, mas sim provar que a vida é uma piada cruel, testando os limites da sanidade e da moralidade, especialmente do Batman, a quem vê como sua antítese perfeita e parceiro em uma dança eterna. Ele comanda a Gangue da Injustiça em seus atos de terrorismo e anarquia."
  },
  {
    nome: "Charada",
    bordao: "Um enigma para cada crime.",
    nomeReal: "Edward Nigma",
    aparicao: "Detective Comics #140 (1948)",
    afiliacao: "Liga da Injustiça (ocasional)",
    habilidades: "Intelecto supremo, engenharia de armadilhas, obsessão por enigmas",
    pop: "Filmes: Batman Forever (1995), Jogos: Arkham City, Arkham Knight; Animação: Batman: The Animated Series",
    outrasHQs: "Justice League",
    feito: "Cria enigmas mortais para testar a inteligência do Batman e desestabilizar Gotham.",
    imagem: "https://upload.wikimedia.org/wikipedia/en/a/a7/RiddlerBatman66.jpg",
    descricao: "O Charada, cujo nome civil é Edward Nygma, é um mestre dos enigmas, quebra-cabeças e charadas. Ele sofre de um transtorno obsessivo-compulsivo que o força a deixar pistas e desafios intelectuais em todos os seus crimes, buscando provar sua superioridade mental sobre a polícia e o Batman. Essa compulsão é, ironicamente, sua maior fraqueza. Nygma é um gênio, muitas vezes vestindo um uniforme verde com um ponto de interrogação (?), e utiliza uma série de dispositivos e armadilhas complexas em seus roubos e esquemas. Em certas versões, ele foi um consultor de segurança ou trabalhador de parques de diversão antes de se voltar para o crime. Sua obsessão por enigmas o torna um adversário formidável, mas também o isola socialmente, tornando-o um vilão trágico e complexo."
  },
  {
    nome: "Bane",
    bordao: "A força é só o começo.",
    nomeReal: "Desconhecido",
    aparicao: "Batman: Vengeance of Bane #1 (1993)",
    afiliacao: "Liga dos Assassinos (vínculos)",
    habilidades: "Força sobre-humana (veneno), estratégia militar, resistência",
    pop: "Filmes: Batman & Robin (1997), The Dark Knight Rises (2012); Jogos: Arkham City, Arkham Knight",
    outrasHQs: "Detective Comics, Batman & Robin Adventures",
    feito: "Quebrou fisicamente o Batman e dominou Gotham por um tempo, provando que planejamento + força extrema é devastador.",
    imagem: "https://upload.wikimedia.org/wikipedia/en/9/93/Bane_DC_Comics.png",
    descricao: "Bane é um vilão de força bruta e inteligência excepcional, nascido e criado na terrível prisão de Peña Dura, onde desenvolveu seu corpo e mente para o auge humano. Sua força sobre-humana é mantida pelo veneno 'Venom', um esteroide que é bombeado diretamente em seu cérebro através de um sistema de tubos. É famoso por ser o único vilão que conseguiu fisicamente quebrar a espinha do Batman (no arco Knightfall), demonstrando que é um adversário que combina o poder físico extremo com uma estratégia militar brilhante. Seus planos são complexos, visando não apenas derrotar o Batman, mas também assumir o controle de Gotham City."
  },
  {
    nome: "Pinguim",
    bordao: "Negócios... e poder nas sombras.",
    nomeReal: "Oswald Chesterfield Cobblepot",
    aparicao: "Detective Comics #58 (1941)",
    afiliacao: "Máfia de Gotham",
    habilidades: "Rede criminosa, recursos financeiros, astúcia política",
    pop: "Filmes: Batman Returns (1992); Animação: Batman: The Animated Series; Jogos: Arkham City",
    outrasHQs: "Gotham City Sirens",
    feito: "Controla o submundo de Gotham com inteligência e recursos financeiros, mantendo sua posição apesar de todos os vilões ao redor.",
    imagem: "https://upload.wikimedia.org/wikipedia/en/1/1d/Penguin_%28Batman_character%29.jpg",
    descricao: "O Pinguim, Oswald Cobblepot, é um criminoso que se apresenta como um 'Cavalheiro do Crime'. Baixo, corpulento e com um nariz pontudo, ele usa um monóculo, cartola e um smoking. Embora não possua superpoderes, ele é um gênio criminoso e estrategista, mestre em artes marciais (como Judô e Ninjutsu em algumas versões). Ele comanda o submundo de Gotham através de seu clube noturno, o Iceberg Lounge, que serve como fachada para suas operações ilegais. Sua marca registrada são seus guarda-chuvas com truques e alta tecnologia, que funcionam como armas ou ferramentas de fuga, demonstrando sua obsessão por pássaros e status."
  },
  {
    nome: "Espantalho",
    bordao: "A Sombra do Medo.",
    nomeReal: "Dr. Jonathan Crane",
    aparicao: "World’s Finest Comics #3 (1941)",
    afiliacao: "Asilo Arkham / Sociedade de Vilões",
    habilidades: "Gás do medo, psicologia forense, manipulação de fobias",
    pop: "Filmes: Batman Begins (2005); Animação: Batman: The Animated Series; Jogos: Arkham Asylum",
    outrasHQs: "Justice League",
    feito: "Usou o medo como arma para manipular cidadãos e vilões, estudando a mente humana através do terror.",
    imagem: "https://upload.wikimedia.org/wikipedia/en/e/ed/Scarecrow_%28DC_Comics%29.png",
    descricao: "O Espantalho, Dr. Jonathan Crane, é um ex-psicólogo com uma profunda obsessão pelo conceito de medo. Ele utiliza sua vasta experiência em fobias para sintetizar um poderoso gás do medo (toxina do medo), que induz alucinações aterrorizantes nas suas vítimas, transformando seus piores medos em realidade. Crane se veste como um espantalho esfarrapado e frequentemente usa sua toxina para cometer crimes que lhe permitem estudar o terror psicológico em suas vítimas. Ele é um vilão intelectual que valoriza o conhecimento e a experimentação acima da riqueza material."
  },
  {
    nome: "Máscara Negra",
    bordao: "A máscara revela o que você realmente é.",
    nomeReal: "Roman Sionis",
    aparicao: "Batman #386 (1985)",
    afiliacao: "Crime organizado",
    habilidades: "Liderança criminosa, brutalidade, manipulação",
    pop: "Filmes: Birds of Prey (2020); Jogos: Arkham City",
    outrasHQs: "Suicide Squad",
    feito: "Controlou o crime em Gotham usando violência extrema e impostura.",
    imagem: "https://upload.wikimedia.org/wikipedia/en/1/1e/Black_Mask_%28Roman_Sionis%29.png",
    descricao: "O Máscara Negra, Roman Sionis, é o sádico senhor do crime de Gotham City, vindo de uma família rica que o negligenciou. Sua marca registrada é a máscara preta de ébano (esculpida a partir do caixão de seu pai), que ele fundiu à sua pele em uma das origens. Obcecado por controle, poder e status, ele comanda uma vasta rede de operações ilegais, incluindo tráfico de drogas e extorsão, e é conhecido por sua crueldade e fascínio pela tortura. Sionis tem um intelecto afiado e é um estrategista habilidoso, determinado a eliminar a elite de Gotham, a quem ele despreza por terem sido a causa de sua infância miserável."
  },
  {
    nome: "Sr. Frio",
    bordao: "O amor pede gelo e sacrifício.",
    nomeReal: "Dr. Victor Fries",
    aparicao: "Batman #121 (1959)",
    afiliacao: "Nenhuma",
    habilidades: "Tecnologia criogênica, armas de gelo, resistência a baixas temperaturas",
    pop: "Filmes: Batman & Robin (1997); Jogos: Arkham City; Animação: Batman: The Animated Series",
    outrasHQs: "Justice League, Suicide Squad",
    feito: "Usou ciência e tecnologia criogênica para salvar sua esposa, tornando-se um vilão trágico e perigoso.",
    imagem: "https://upload.wikimedia.org/wikipedia/en/5/5f/Mr._Freeze.png",
    descricao: "Sr. Frio, ou Dr. Victor Fries, é uma das figuras mais trágicas da galeria de vilões. Ele era um brilhante cientista criogenista cuja esposa, Nora Fries, foi diagnosticada com uma doença fatal e colocada em animação suspensa. Um acidente no laboratório o deixou incapaz de sobreviver em temperaturas acima de zero, forçando-o a usar um traje criogênico alimentado por diamantes. Movido por um amor desesperado, seus crimes envolvem roubar recursos ou equipamentos para curar Nora, usando sua arma congelante para incapacitar seus inimigos, refletindo sua alma isolada e congelada."
  },
  {
    nome: "Ra's al Ghul",
    bordao: "O mundo precisa ser purificado.",
    nomeReal: "Ra's al Ghul",
    aparicao: "Batman #232 (1971)",
    afiliacao: "Liga dos Assassinos",
    habilidades: "Imortalidade parcial (Poços de Lázaro), liderança, tática global",
    pop: "Filmes: Batman Begins (2005); Animação: Batman: The Animated Series; Jogos: Arkham City",
    outrasHQs: "Justice League, Teen Titans",
    feito: "Planejou a destruição de Gotham para purificar o mundo e testou Batman como seu herdeiro.",
    imagem: "https://upload.wikimedia.org/wikipedia/en/c/c7/Ra%27s_al_Ghul_%28DC_Animated_Universe%29.jpg",
    descricao: "Ra's al Ghul, o Cabeça do Demônio, é um guerreiro e eco-terrorista que tem vivido por séculos graças ao uso dos místicos Poços de Lázaro, piscinas que curam e rejuvenescem, mas que também causam insanidade temporária. Líder da organização secreta Liga dos Assassinos (ou Liga das Sombras), ele é um mestre em todas as formas de combate e estrategista. Sua missão é salvar a Terra da podridão e da humanidade, frequentemente planejando a destruição de Gotham City, que ele vê como um foco de corrupção. Ele vê Batman como um potencial sucessor e sua filha, Talia al Ghul, frequentemente complica a relação entre os dois"
  },
  {
    nome: "Duas-Caras",
    bordao: "Cara ou coroa decide o destino.",
    nomeReal: "Harvey Dent",
    aparicao: "Detective Comics #66 (1942)",
    afiliacao: "Nenhuma",
    habilidades: "Estratégia, tática criminosa, implacável quando a moeda decide",
    pop: "Filmes: Batman Forever (1995); Jogos: Arkham City; Animação: Batman: The Animated Series",
    outrasHQs: "Suicide Squad",
    feito: "Transformou-se em um juiz da própria sorte, usando a moeda para decidir o destino de suas vítimas.",
    imagem: "https://upload.wikimedia.org/wikipedia/en/5/5f/Two-Face-Batman_v1_234.png",
    descricao: "O Duas Caras é o trágico produto da queda de Harvey Dent, o outrora idealista e carismático promotor público de Gotham que, junto com o Batman e o Comissário Gordon, jurou limpar a cidade do crime. Após ter metade do rosto desfigurado por ácido (ou em algumas versões, por queimadura), sua psique se fragmentou, dando origem a uma personalidade criminosa obcecada pela dualidade e o caos. Sua marca registrada é a moeda de duas faces (uma polida, a outra arranhada e danificada), que ele usa para decidir o destino de suas vítimas e a moralidade de seus crimes, transformando o livre arbítrio em um mero jogo de azar. Seus crimes são frequentemente temáticos em torno do número dois e ele está constantemente em guerra com sua metade boa. A complexidade de Duas Caras reside na luta interna entre sua antiga identidade e sua nova persona, tornando-o um dos vilões mais psicológicos e multifacetados do universo do Batman."
  },
  {
    nome: "Corte das Corujas",
    bordao: "Gotham está sob vigilância eterna.",
    nomeReal: "Segredo / Vários membros",
    aparicao: "Batman #1, New 52 (2011)",
    afiliacao: "Ordem secreta",
    habilidades: "Estratégia, combate silencioso, assassinato secreto",
    pop: "Filmes: Ainda não adaptado diretamente; Animação: Batman: Gotham by Gaslight; Jogos: Batman: Arkham Knight (referência)",
    outrasHQs: "Nightwing, Detective Comics",
    feito: "Controla Gotham das sombras por gerações, manipulando políticos e criminosos sem ser detectada.",
    imagem: "https://upload.wikimedia.org/wikipedia/en/4/4d/Court_of_Owls.png",
    descricao: "A Corte das Corujas é uma sociedade secreta e secular, composta pelas famílias mais ricas e antigas de Gotham City, que manipula a cidade por trás das cortinas há séculos. Por muito tempo considerada apenas uma lenda urbana, ela é uma ameaça sistêmica que usa sua vasta influência para controlar os acontecimentos de Gotham. Para impor sua vontade, a Corte emprega os Garras (Talons), assassinos de elite imortais e altamente treinados que representam um desafio mortal e pessoal para o Batman. A organização é notável por expandir a mitologia da cidade e estabelecer um inimigo ancestral, com as corujas sendo predadoras naturais do morcego."
  }
];

// ====== Gerar os cards e abrir modal ======
const grid = document.getElementById('grid');
const overlay = document.getElementById('overlay');
const modalTitle = document.getElementById('modal-title');
const modalBordao = document.getElementById('modal-bordao');
const modalImg = document.getElementById('modal-img');
const modalNomeReal = document.getElementById('modal-nomeReal');
const modalAparicao = document.getElementById('modal-aparicao');
const modalAfiliacao = document.getElementById('modal-afiliacao');
const modalHabilidades = document.getElementById('modal-habilidades');
const modalPop = document.getElementById('modal-pop');
const modalOutrasHQs = document.getElementById('modal-outrasHQs');
const modalFeito = document.getElementById('modal-feito');
const modalDesc = document.getElementById('modal-desc');
const closeBtn = document.getElementById('closeBtn');

VILOES.forEach(v => {
  const card = document.createElement('div');
  card.className = 'vilao-card';
  card.innerHTML = `
    <img src="${v.imagem}" alt="${v.nome}">
    <h2>${v.nome}</h2>
    <p>${v.bordao}</p>
  `;
  card.addEventListener('click', () => {
    modalTitle.textContent = v.nome;
    modalBordao.textContent = v.bordao;
    modalImg.src = v.imagem;
    modalImg.alt = v.nome;
    modalNomeReal.textContent = v.nomeReal;
    modalAparicao.textContent = v.aparicao;
    modalAfiliacao.textContent = v.afiliacao;
    modalHabilidades.textContent = v.habilidades;
    modalPop.textContent = v.pop;
    modalOutrasHQs.textContent = v.outrasHQs;
    modalFeito.textContent = v.feito;
    modalDesc.textContent = v.descricao;
    overlay.style.display = 'flex';
    overlay.setAttribute('aria-hidden', 'false');
  });
  grid.appendChild(card);
});

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
  overlay.setAttribute('aria-hidden', 'true');
});

overlay.addEventListener('click', e => {
  if(e.target === overlay) {
    overlay.style.display = 'none';
    overlay.setAttribute('aria-hidden', 'true');
  }
});